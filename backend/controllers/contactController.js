const Contact = require("../models/Contact");

// Create Contact
exports.createContact = async (req, res) => {
  try {
    const { phone } = req.body;

    // Check duplicate phone
    const existing = await Contact.findOne({ phone });
    if (existing) {
      return res.status(400).json({ message: "Contact already exists" });
    }

    const contact = await Contact.create(req.body);
    res.status(201).json(contact);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get All Contacts (with Search + Sorting)
exports.getContacts = async (req, res) => {
  try {
    const { search } = req.query;

    let query = {};

    if (search) {
      query = {
        $or: [
          { name: { $regex: search, $options: "i" } },
          { phone: { $regex: search, $options: "i" } }
        ]
      };
    }

    const contacts = await Contact.find(query).sort({ name: 1 });
    res.json(contacts);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Update Contact
exports.updateContact = async (req, res) => {
  try {
    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json(updated);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Delete Contact
exports.deleteContact = async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json({ message: "Deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};