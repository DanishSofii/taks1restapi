-----------------------Guide to test the api end points------------------

#1 Get all the devices from the database
GET /devices

https://devices-2bd1.onrender.com/

#2 Get a particular device using id
GET /devices/:id

https://devices-2bd1.onrender.com/device/:id
replace :id with the id you warranty

#3 Get list of devices using device name
GET /devices/name/:name

https://devices-2bd1.onrender.com/device/name/:name

:name replace with actual name like device1,device2,device4 etc

#4 Create a device and insert into database

POST /device/create
https://devices-2bd1.onrender.com/device/create

insert into body as json eg:
        {
            "deviceId": 9,
            "name": "device9",
            "type": "alternator",
            "model": "9v1`",
            "powerConsumption": 200,
            "voltage": 230,
            "warranty": 24
        }

#5 Delete a device by id
DELETE /device/:id

https://devices-2bd1.onrender.com/device/:id

replace :id with device id

#6 Get devices by type
GET /device/type/:type

https://devices-2bd1.onrender.com/device/type/:type

replace :type with any type like fan,AC,light,switch etc


#7 Update a device
PUT /device/:id

https://devices-2bd1.onrender.com/device/:id

replace :id with device id
give updated date in body

eg updated data:
{
        "name": "device1",
        "type": "Fan",
        "model": "1v1`",
        "powerConsumption": 50,
        "voltage": 120,
        "warranty": 24
}