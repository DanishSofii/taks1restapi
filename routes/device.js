const express = require("express");
const router = express.Router();
const {
  handleGetAllDevices,
  handleCreateDevice,
  handleDeleteDeviceById,
  handleGetDeviceById,
  handleGetDevicesByName,
  handleGetDevicesByType,
  handleUpdateDeviceById
} = require("../controllers/device");

//get all the devices
router.route("/").get(handleGetAllDevices);

// create a new device
router.route("/device/create").post(handleCreateDevice);

// get devices by name
router.route("/device/name/:name").get(handleGetDevicesByName);

// get devices by type/category
router.route("/device/type/:type").get(handleGetDevicesByType);

//  update a particular device , delete a particular device
router.route("/device/:id").get(handleGetDeviceById).delete(handleDeleteDeviceById).patch(handleUpdateDeviceById);

module.exports = router;

