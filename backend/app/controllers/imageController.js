const Image = require('../models/Image');

exports.createImage = async (req, res) => {
  try {
    const { user_id, imageUrl, bio } = req.body;
    const newImage = new Image({ user_id, imageUrl, bio });
    const savedImage = await newImage.save();
    res.status(201).json(savedImage);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getImageById = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }
    res.status(200).json(image);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateImage = async (req, res) => {
  try {
    const { user_id, imageUrl, bio } = req.body;
    const updatedImage = await Image.findByIdAndUpdate(
      req.params.id,
      { user_id, imageUrl, bio },
      { new: true }
    );
    if (!updatedImage) {
      return res.status(404).json({ error: 'Image not found' });
    }
    res.status(200).json(updatedImage);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteImage = async (req, res) => {
  try {
    const deletedImage = await Image.findByIdAndDelete(req.params.id);
    if (!deletedImage) {
      return res.status(404).json({ error: 'Image not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
