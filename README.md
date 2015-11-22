# node-to-joy
This is a basic responsive webapp utilizing Angular, Bootstrap and jQuery based on the Node.js server ecosystem. Interfaces are provided for MongoDB and SqlServer.
Essentially the previous project ResponsiveFoundation has been ported to Node.js.

Dependencies: 

1) You need MongoDB installed.
2) Load the file into MondoDB

To start the app use: 

	npm start

To run in the browser:

	http://localhost:3000/responsiveList

In MongoDB

1) Create database

    use devices

2) Use this statement to populate the MongoDB database.

 db.devices.insert(
[
    {
        "serialNumber": 5000367337,
        "confirmationCode": "635364-23",
        "status": "PENDING",
        "deviceType": "Transponder",
        "model": "GTX-20"
    },
    {
        "serialNumber": 5010568359,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "GTX-35"
    },
    {
        "serialNumber": 5000007110,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "XTX-23"
    },
    {
        "serialNumber": 5000055753,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "GTX-35"
    },
    {
        "serialNumber": 5010345721,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "XTX-31"
    },
    {
        "serialNumber": 5000386819,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "XTX-31.A"
    },
    {
        "serialNumber": 5000486953,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "GTX-35"
    },
    {
        "serialNumber": 5000245294,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "XTX-31.B"
    },
    {
        "serialNumber": 5000003785,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "DFW-12"
    },
    {
        "serialNumber": 5000427055,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "XTX-16"
    },
    {
        "serialNumber": 5010550842,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "GTX-35"
    },
    {
        "serialNumber": 5000641666,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "XTX-31.C"
    },
    {
        "serialNumber": 5000433438,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "XTX-31.C"
    },
    {
        "serialNumber": 5000142361,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "GTX-35"
    },
    {
        "serialNumber": 5000008834,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "GSX-35-34"
    },
    {
        "serialNumber": 5000146178,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "GTX-35"
    },
    {
        "serialNumber": 5000552320,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "HTX-726"
    },
    {
        "serialNumber": 5000082636,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "GTX-35"
    },
    {
        "serialNumber": 5000008186,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "XTX-31.A"
    },
    {
        "serialNumber": 5000394432,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "BTX-254"
    },
    {
        "serialNumber": 5010569646,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "HTX-728"
    },
    {
        "serialNumber": 5000212071,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "GTX-35"
    },
    {
        "serialNumber": 5000041336,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "XTX-31"
    },
    {
        "serialNumber": 5000192618,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "GTX-35"
    },
    {
        "serialNumber": 5000270934,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "HTX-728"
    },
    {
        "serialNumber": 5000006212,
        "confirmationCode": "827364-23",
        "status": "PENDING",
        "deviceType": "Transponder",
        "model": "JPX-3847"
    },
    {
        "serialNumber": 5000245285,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "JXH-758"
    },
    {
        "serialNumber": 5000057658,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "GXF-1230"
    },
    {
        "serialNumber": 5000390588,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "GTX-20"
    },
    {
        "serialNumber": 5000000425,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "GTX-35"
    },
    {
        "serialNumber": 5000206490,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "XTX-23"
    },
    {
        "serialNumber": 5010348463,
        "confirmationCode": "827364-23",
        "status": "FAILED",
        "deviceType": "Transponder",
        "model": "XTX-31.C"
    }
]
)

+++++++++++++++++++++++++++++++++++++++++++++++++++++

Run this to create the table Devices and populate SqlServer

/****** Object:  Table [dbo].[Devices]    Script Date: 11/21/2015 3:16:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Devices](
	[serialNumber] [nvarchar](50) NOT NULL,
	[confirmationCode] [nvarchar](50) NULL,
	[status] [nchar](10) NULL,
	[deviceType] [nvarchar](50) NULL,
	[model] [nchar](10) NULL,
 CONSTRAINT [PK_Devices] PRIMARY KEY CLUSTERED
(
	[serialNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5000000425', N'827364-23', N'FAILED    ', N'Transponder', N'GTX-35    ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5000003785', N'827364-23', N'FAILED    ', N'Transponder', N'DFW-12    ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5000006212', N'827364-23', N'PENDING   ', N'Transponder', N'JPX-3847  ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5000007110', N'827364-23', N'FAILED    ', N'Transponder', N'XTX-23    ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5000008186', N'827364-23', N'FAILED    ', N'Transponder', N'XTX-31.A  ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5000008834', N'827364-23', N'FAILED    ', N'Transponder', N'GSX-35-34 ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5000041336', N'827364-23', N'FAILED    ', N'Transponder', N'XTX-31    ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5000055753', N'827364-23', N'FAILED    ', N'Transponder', N'GTX-35    ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5000057658', N'827364-23', N'FAILED    ', N'Transponder', N'GXF-1230  ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5000082636', N'827364-23', N'FAILED    ', N'Transponder', N'GTX-35    ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5000142361', N'827364-23', N'FAILED    ', N'Transponder', N'GTX-35    ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5000146178', N'827364-23', N'FAILED    ', N'Transponder', N'GTX-35    ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5000192618', N'827364-23', N'FAILED    ', N'Transponder', N'GTX-35    ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5000206490', N'827364-23', N'FAILED    ', N'Transponder', N'XTX-23    ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5000212071', N'827364-23', N'FAILED    ', N'Transponder', N'GTX-35    ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5000245285', N'827364-23', N'FAILED    ', N'Transponder', N'JXH-758   ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5000245294', N'827364-23', N'FAILED    ', N'Transponder', N'XTX-31.B  ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5000270934', N'827364-23', N'FAILED    ', N'Transponder', N'HTX-728   ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5000367337', N'635364-23', N'PENDING   ', N'Transponder', N'GTX-20    ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5000386819', N'827364-23', N'FAILED    ', N'Transponder', N'XTX-31.A  ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5000390588', N'827364-23', N'FAILED    ', N'Transponder', N'GTX-20    ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5000394432', N'827364-23', N'FAILED    ', N'Transponder', N'BTX-254   ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5000427055', N'827364-23', N'FAILED    ', N'Transponder', N'XTX-16    ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5000433438', N'827364-23', N'FAILED    ', N'Transponder', N'XTX-31.C  ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5000486953', N'827364-23', N'FAILED    ', N'Transponder', N'GTX-35    ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5000552320', N'827364-23', N'FAILED    ', N'Transponder', N'HTX-726   ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5000641666', N'827364-23', N'FAILED    ', N'Transponder', N'XTX-31.C  ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5010345721', N'827364-23', N'FAILED    ', N'Transponder', N'XTX-31    ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5010348463', N'827364-23', N'FAILED    ', N'Transponder', N'XTX-31.C  ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5010550842', N'827364-23', N'FAILED    ', N'Transponder', N'GTX-35    ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5010568359', N'827364-23', N'FAILED    ', N'Transponder', N'GTX-35    ')
INSERT [dbo].[Devices] ([serialNumber], [confirmationCode], [status], [deviceType], [model]) VALUES (N'5010569646', N'827364-23', N'FAILED    ', N'Transponder', N'HTX-728   ')


+++++++++++++++++++++++++

The code to switch from MongoDB or SqlServer is in app.js line 14

if(DATABASE === 'MongoDB') {
    api = require('./routes/apiRouteMongo');
} else
if(DATABASE === 'SqlServer') {
    api = require('./routes/apiRouteSqlServer');
}


