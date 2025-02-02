const Device = require("../models/device");

// get all the devices from database
async function handleGetAllDevices(req, res) {
  try {
    const allDevices = await Device.find({});
    if (!allDevices) return res.json({ error: "Users not found" });
    return res.json(allDevices);
  } catch (err) {
    console.log("Error getting devices from database", err);
  }
}

// get a particular device from database
async function handleGetDeviceById(req, res) {
  try {
    const device = await Device.findOne({ deviceId: req.params.id });
    if (!device) return res.status(404).json({ error: "device not found" });
    return res.json(device);
  } catch (err) {
    console.log("Error getting device by id from database", err);
  }
}

// get list of devices using a name. multiple devices can have same name but different models
async function handleGetDevicesByName(req, res) {
  try {
    const devices = await Device.find({ name: req.params.name });
    if (!devices)
      return res
        .status(404)
        .json({ error: `No devices found with name${req.params.name}` });
    return res.json(devices);
  } catch (err) {
    console.log("Error getting device by name from database", err);
  }
}

//create a device and insert into database
async function handleCreateDevice(req, res) {
  try {
    const body = req.body;
    if (
      !body ||
      !body.deviceId ||
      !body.name ||
      !body.type ||
      !body.model ||
      !body.powerConsumption ||
      !body.voltage
    ) {
      return res
        .status(400)
        .json({ message: "Please fill in all the required fields" });
    }

    const result = await Device.create({
      deviceId: body.deviceId,
      name: body.name,
      type: body.type,
      model: body.model,
      powerConsumption: body.powerConsumption,
      voltage: body.voltage,
      warranty: body.warranty,
    });
    console.log("result :", result);
    return res.status(201).json({ msg: "success", data: result });
  } catch (err) {
    console.log("Could not create device", err);
    return res.status(400).json(err.errorResponse.errmsg);
  }
}

// delete device by id
async function handleDeleteDeviceById(req, res) {
  try {
    await Device.findOneAndDelete({ deviceId: req.params.id });
    return res.json({ msg: "Device deleted successfully" });
  } catch (err) {
    console.log("Error deleting device by id from database", err);
  }
}

// get devices by category
async function handleGetDevicesByType(req, res) {
  try {
    const devices = await Device.find({ type: req.params.type });
    if (devices.length === 0)
      return res
        .status(404)
        .json({ msg: `No devices with type : ${req.params.type}` });

    return res.status(200).json(devices);
  } catch (err) {
    console.log("Error getting devices by category/type from database", err);
    return res.status(404).json(err);
  }
}

// update the device
async function handleUpdateDeviceById(req, res) {
  try {
    const { id } = req.params;
    const newData = req.body;

    if (!newData || Object.keys(newData).length === 0) {
      return res.status(400).json({ msg: "No update data provided" });
    }
    const updatedDevice = await Device.findOneAndUpdate({
      deviceId: id,
      $set: newData,
      new: true,
    });
    if (!updatedDevice) {
      return res.status(404).json({ err: "Device not found" });
    }
    return res.json({
      msg: "Device updated successfully",
      data: updatedDevice,
    });
  } catch (err) {
    console.log("Error updating device by id from database", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  handleGetAllDevices,
  handleGetDeviceById,
  handleCreateDevice,
  handleDeleteDeviceById,
  handleGetDevicesByName,
  handleGetDevicesByType,
  handleUpdateDeviceById,
};
