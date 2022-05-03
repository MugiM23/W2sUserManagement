const staticData = [
    {
        "id":0,
        "username": "admin",
        "password": "admin",
        "name": {
            "first": "Adam",
            "last": "Ministrator"
        },
        "ssn": "123-45-6789",
        "dob": "1900-01-01T06:00:00.000Z",
        "hiredOn": "1900-01-01T06:00:00.000Z",
        "terminatedOn": null,
        "email": "admin@company.com",
        "phone": "123-456-7890",
        "zip": "36713",

        "role": "admin",

        "gender": "male",
        "portrait": "portraits/admin.jpg",
        "thumbnail": "portraits/admin-thumb.jpg"
    },
    {
        "id":1,
        "username": "jdoe",
        "password": "jdoe",
        "name": {
            "first": "John",
            "last": "Doe"
        },
        "ssn": "704-23-6085",
        "dob": "1978-10-02T05:00:00.000Z",
        "hiredOn": "2002-04-11T05:00:00.000Z",
        "terminatedOn": null,
        "email": "john.doe@company.com",
        "phone": "456-789-1230",
        "address": {
            "street": "3199 Country Club Rd",
            "city": "Fremont",
            "state": "Virginia",
            "zip": "94390"
        },
        "role": 'developer',
        "gender": "male",
        "portrait": "portraits/jdoe.jpg",
        "thumbnail": "portraits/jdoe-thumb.jpg"
    },
    {
        "id":2,
        "username": "purplewolf498",
        "password": "personal",
        "name": {
            "first": "Yolanda",
            "last": "Bishop"
        },
        "ssn": "929-54-2428",
        "dob": "1965-12-08T06:00:00.000Z",
        "hiredOn": "1989-08-14T05:00:00.000Z",
        "terminatedOn": null,
        "email": "yolanda.bishop25@company.com",
        "phone": "612-204-4421",
        "address": {
            "street": "4969 Lovers Ln",
            "city": "Elko",
            "state": "Utah",
            "zip": "98260"
        },
        "role": 'tester',
        "gender": "female",
        "portrait": "portraits/purplewolf498.jpg",
        "thumbnail": "portraits/purplewolf498-thumb.jpg"
    },
    {
        "id":3,
        "username": "whitecat698",
        "password": "jenny1",
        "name": {
            "first": "Allen",
            "last": "Hansen"
        },
        "ssn": "504-23-5361",
        "dob": "1965-12-15T06:00:00.000Z",
        "hiredOn": "1988-03-26T06:00:00.000Z",
        "terminatedOn": null,
        "email": "allen.hansen47@company.com",
        "phone": "377-837-4817",
        "address": {
            "street": "1902 Plum St",
            "city": "Akron",
            "state": "Hawaii",
            "zip": "26975"
        },
        "role": 'developer',

        "gender": "male",
        "portrait": "portraits/whitecat698.jpg",
        "thumbnail": "portraits/whitecat698-thumb.jpg"
    },
    {
        "id":4,
        "username": "bluepanda840",
        "password": "funfun",
        "name": {
            "first": "Leslie",
            "last": "Vasquez"
        },
        "ssn": "906-45-7380",
        "dob": "1986-10-12T05:00:00.000Z",
        "hiredOn": "2011-10-24T05:00:00.000Z",
        "terminatedOn": null,
        "email": "leslie.vasquez65@company.com",
        "phone": "854-988-2654",
        "address": {
            "street": "7255 Camden Ave",
            "city": "Frederick",
            "state": "Michigan",
            "zip": "10865"
        },
        "role": 'HR',
        "gender": "female",
        "portrait": "portraits/bluepanda840.jpg",
        "thumbnail": "portraits/bluepanda840-thumb.jpg"
    },
    {
        "id":5,
        "username": "lazypanda966",
        "password": "start1",
        "name": {
            "first": "Georgia",
            "last": "Bryant"
        },
        "ssn": "326-59-7200",
        "dob": "1966-12-08T06:00:00.000Z",
        "hiredOn": "2006-12-24T06:00:00.000Z",
        "terminatedOn": null,
        "email": "georgia.bryant83@company.com",
        "phone": "716-661-6412",
        "address": {
            "street": "8291 Hunters Creek Dr",
            "city": "Billings",
            "state": "Oklahoma",
            "zip": "95089"
        },
        "role": 'admin',
        "gender": "female",
        "portrait": "portraits/lazypanda966.jpg",
        "thumbnail": "portraits/lazypanda966-thumb.jpg"
    },
    {
        "id":6,
        "username": "bigelephant907",
        "password": "model",
        "name": {
            "first": "Troy",
            "last": "Hart"
        },
        "ssn": "452-13-6989",
        "dob": "1988-06-24T05:00:00.000Z",
        "hiredOn": "2012-01-05T06:00:00.000Z",
        "terminatedOn": null,
        "email": "troy.hart74@company.com",
        "phone": "222-799-4554",
        "address": {
            "street": "7665 Washington Ave",
            "city": "Indianapolis",
            "state": "Connecticut",
            "zip": "23222"
        },
        "role": 'developer',

        "gender": "male",
        "portrait": "portraits/bigelephant907.jpg",
        "thumbnail": "portraits/bigelephant907-thumb.jpg"
    },
    {
        "id":7,
        "username": "ticklishgorilla951",
        "password": "sparky",
        "name": {
            "first": "Andrew",
            "last": "Jackson"
        },
        "ssn": "693-12-9075",
        "dob": "1977-01-15T06:00:00.000Z",
        "hiredOn": "2011-09-05T05:00:00.000Z",
        "terminatedOn": "2013-04-25T05:00:00.000Z",
        "email": "andrew.jackson62@company.com",
        "phone": "166-121-9675",
        "address": {
            "street": "4815 Bollinger Rd",
            "city": "Caldwell",
            "state": "Kentucky",
            "zip": "89310"
        },
        "role": 'developer',

        "gender": "male",
        "portrait": "portraits/ticklishgorilla951.jpg",
        "thumbnail": "portraits/ticklishgorilla951-thumb.jpg"
    },
    {
        "id":8,
        "username": "whitekoala138",
        "password": "gina",
        "name": {
            "first": "John",
            "last": "Jackson"
        },
        "ssn": "163-60-5769",
        "dob": "1989-07-09T05:00:00.000Z",
        "hiredOn": "2013-05-25T05:00:00.000Z",
        "terminatedOn": null,
        "email": "harvey.lawrence68@company.com",
        "phone": "378-892-2670",
        "address": {
            "street": "3081 Paddock Way",
            "city": "Shiloh",
            "state": "Texas",
            "zip": "32142"
        },
        "role": 'developer',

        "gender": "male",
        "portrait": "portraits/whitekoala138.jpg",
        "thumbnail": "portraits/whitekoala138-thumb.jpg"
    },
    {
        "id":9,
        "username": "yellowladybug535",
        "password": "qwer",
        "name": {
            "first": "Roberta",
            "last": "Morgan"
        },
        "ssn": "423-85-9453",
        "dob": "1969-05-17T05:00:00.000Z",
        "hiredOn": "2012-04-14T05:00:00.000Z",
        "terminatedOn": null,
        "email": "roberta.morgan39@company.com",
        "phone": "726-494-2648",
        "address": {
            "street": "2819 Woodland St",
            "city": "Sunnyvale",
            "state": "Wisconsin",
            "zip": "14618"
        },
        "role": 'developer',
        "gender": "female",
        "portrait": "portraits/yellowladybug535.jpg",
        "thumbnail": "portraits/yellowladybug535-thumb.jpg"
    },
    {
        "id":10,
        "username": "yellowbird271",
        "password": "inter",
        "name": {
            "first": "Judith",
            "last": "Hill"
        },
        "ssn": "218-16-5327",
        "dob": "1991-07-05T05:00:00.000Z",
        "hiredOn": "2014-06-13T05:00:00.000Z",
        "terminatedOn": null,
        "email": "judith.reid60@company.com",
        "phone": "280-961-5125",
        "address": {
            "street": "2022 Spring St",
            "city": "Edgewood",
            "state": "Connecticut",
            "zip": "61320"
        },
        "role": 'developer',
        "gender": "female",
        "portrait": "portraits/yellowbird271.jpg",
        "thumbnail": "portraits/yellowbird271-thumb.jpg"
    },
    {
        "id":11,
        "username": "bluegorilla84",
        "password": "skate",
        "name": {
            "first": "Herbert",
            "last": "Smith"
        },
        "ssn": "857-77-3546",
        "dob": "1987-01-23T06:00:00.000Z",
        "hiredOn": "2010-07-22T05:00:00.000Z",
        "terminatedOn": null,
        "email": "herbert.jimenez24@company.com",
        "phone": "547-599-7247",
        "address": {
            "street": "1358 Elgin St",
            "city": "Rio Rancho",
            "state": "South Dakota",
            "zip": "22109"
        },
        "role": 'developer',
        "gender": "male",
        "portrait": "portraits/bluegorilla84.jpg",
        "thumbnail": "portraits/bluegorilla84-thumb.jpg"
    },
    {
        "id":12,
        "username": "greenwolf347",
        "password": "avalon",
        "name": {
            "first": "Rita",
            "last": "Elliott"
        },
        "ssn": "285-24-7202",
        "dob": "1986-03-22T06:00:00.000Z",
        "hiredOn": "2010-09-02T05:00:00.000Z",
        "terminatedOn": null,
        "email": "rita.elliott58@company.com",
        "phone": "509-358-3176",
        "address": {
            "street": "8319 College St",
            "city": "Toledo",
            "state": "Nebraska",
            "zip": "96351"
        },
        "role": 'developer',
        "gender": "female",
        "portrait": "portraits/greenwolf347.jpg",
        "thumbnail": "portraits/greenwolf347-thumb.jpg"
    },
    {
        "id":13,
        "username": "orangeelephant668",
        "password": "volleyba",
        "name": {
            "first": "Natalie",
            "last": "Russell"
        },
        "ssn": "713-16-2496",
        "dob": "1980-11-17T06:00:00.000Z",
        "hiredOn": "2010-04-19T05:00:00.000Z",
        "terminatedOn": null,
        "email": "natalie.russell65@company.com",
        "phone": "637-554-9381",
        "address": {
            "street": "9337 Hogan St",
            "city": "Roseburg",
            "state": "Arkansas",
            "zip": "77421"
        },
        "role": 'developer',
        "gender": "female",
        "portrait": "portraits/orangeelephant668.jpg",
        "thumbnail": "portraits/orangeelephant668-thumb.jpg"
    },
    {
        "id":14,
        "username": "crazypanda274",
        "password": "hansolo",
        "name": {
            "first": "Gina",
            "last": "Mccoy"
        },
        "ssn": "843-86-3210",
        "dob": "1970-08-13T05:00:00.000Z",
        "hiredOn": "2014-12-21T06:00:00.000Z",
        "terminatedOn": null,
        "email": "gina.mccoy13@company.com",
        "phone": "968-695-9354",
        "address": {
            "street": "7345 Locust Rd",
            "city": "Ironville",
            "state": "Florida",
            "zip": "78134"
        },
        "role": 'developer',
        "gender": "female",
        "portrait": "portraits/crazypanda274.jpg",
        "thumbnail": "portraits/crazypanda274-thumb.jpg"
    },
    {
        "id":15,
        "username": "whitecat119",
        "password": "mason",
        "name": {
            "first": "Eduardo",
            "last": "Porter"
        },
        "ssn": "930-33-6421",
        "dob": "1967-06-02T05:00:00.000Z",
        "hiredOn": "2007-06-25T05:00:00.000Z",
        "terminatedOn": "2012-02-17T06:00:00.000Z",
        "email": "eduardo.porter98@company.com",
        "phone": "982-852-9258",
        "address": {
            "street": "7028 Frances Ct",
            "city": "Henderson",
            "state": "Michigan",
            "zip": "68957"
        },
        "role": 'developer',
        "gender": "male",
        "portrait": "portraits/whitecat119.jpg",
        "thumbnail": "portraits/whitecat119-thumb.jpg"
    },
    {
        "id":16,
        "username": "whitemouse304",
        "password": "stimpy",
        "name": {
            "first": "Priscilla",
            "last": "Hill"
        },
        "ssn": "603-83-1809",
        "dob": "1986-04-08T06:00:00.000Z",
        "hiredOn": "2010-11-19T06:00:00.000Z",
        "terminatedOn": null,
        "email": "priscilla.mitchell22@company.com",
        "phone": "464-509-7488",
        "address": {
            "street": "7713 First Street",
            "city": "New Haven",
            "state": "Connecticut",
            "zip": "42732"
        },
        "role": 'developer',
        "gender": "female",
        "portrait": "portraits/whitemouse304.jpg",
        "thumbnail": "portraits/whitemouse304-thumb.jpg"
    },
    {
        "id":17,
        "username": "beautifulleopard367",
        "password": "claude",
        "name": {
            "first": "Pedro",
            "last": "Peterson"
        },
        "ssn": "405-48-3908",
        "dob": "1982-06-12T05:00:00.000Z",
        "hiredOn": "2005-10-21T05:00:00.000Z",
        "terminatedOn": null,
        "email": "pedro.peterson70@company.com",
        "phone": "256-436-7216",
        "address": {
            "street": "4137 Lone Wolf Trail",
            "city": "Boulder",
            "state": "Texas",
            "zip": "58987"
        },
        "role": 'developer',
        "gender": "male",
        "portrait": "portraits/beautifulleopard367.jpg",
        "thumbnail": "portraits/beautifulleopard367-thumb.jpg"
    },
    {
        "id":18,
        "username": "whitepeacock532",
        "password": "zouzou",
        "name": {
            "first": "Darlene",
            "last": "Duncan"
        },
        "ssn": "431-86-4864",
        "dob": "1980-03-02T06:00:00.000Z",
        "hiredOn": "2002-06-17T05:00:00.000Z",
        "terminatedOn": null,
        "email": "darlene.duncan94@company.com",
        "phone": "238-413-5068",
        "address": {
            "street": "9913 Stevens Creek Blvd",
            "city": "Evansville",
            "state": "Minnesota",
            "zip": "37697"
        },
        "role": 'developer',

        "gender": "female",
        "portrait": "portraits/whitepeacock532.jpg",
        "thumbnail": "portraits/whitepeacock532-thumb.jpg"
    },
    {
        "id":19,
        "username": "blackpanda237",
        "password": "novell",
        "name": {
            "first": "Laurie",
            "last": "Castro"
        },
        "ssn": "145-95-4662",
        "dob": "1977-06-04T05:00:00.000Z",
        "hiredOn": "2011-03-08T06:00:00.000Z",
        "terminatedOn": null,
        "email": "laurie.castro82@company.com",
        "phone": "761-689-8002",
        "address": {
            "street": "9199 E North St",
            "city": "Coppell",
            "state": "Michigan",
            "zip": "21627"
        },
        "role": 'developer',
        "gender": "female",
        "portrait": "portraits/blackpanda237.jpg",
        "thumbnail": "portraits/blackpanda237-thumb.jpg"
    },
    {
        "id":20,
        "username": "greenfish196",
        "password": "melanie",
        "name": {
            "first": "Deann",
            "last": "Williamson"
        },
        "ssn": "614-57-5859",
        "dob": "1992-01-15T06:00:00.000Z",
        "hiredOn": "2012-06-24T05:00:00.000Z",
        "terminatedOn": null,
        "email": "deann.williamson57@company.com",
        "phone": "282-114-8353",
        "address": {
            "street": "1772 Spring St",
            "city": "Tacoma",
            "state": "South Dakota",
            "zip": "11875"
        },
        "role": 'developer',
        "gender": "female",
        "portrait": "portraits/greenfish196.jpg",
        "thumbnail": "portraits/greenfish196-thumb.jpg"
    },
    {
        "id":21,
        "username": "ticklishdog505",
        "password": "revolver",
        "name": {
            "first": "Irene",
            "last": "Gutierrez"
        },
        "ssn": "815-56-8221",
        "dob": "1992-12-17T06:00:00.000Z",
        "hiredOn": "2013-01-17T06:00:00.000Z",
        "terminatedOn": null,
        "email": "irene.gutierrez33@company.com",
        "phone": "601-692-3621",
        "address": {
            "street": "9977 Saddle Dr",
            "city": "Mesquite",
            "state": "Idaho",
            "zip": "52655"
        },
        "role": 'developer',
        "gender": "female",
        "portrait": "portraits/ticklishdog505.jpg",
        "thumbnail": "portraits/ticklishdog505-thumb.jpg"
    },
    {
        "id":22,
        "username": "redrabbit642",
        "password": "sheng",
        "name": {
            "first": "Samuel",
            "last": "Smith"
        },
        "ssn": "773-79-4617",
        "dob": "1974-05-19T05:00:00.000Z",
        "hiredOn": "2012-09-25T05:00:00.000Z",
        "terminatedOn": null,
        "email": "samuel.nelson94@company.com",
        "phone": "392-475-4229",
        "address": {
            "street": "1428 Cherry St",
            "city": "Los Lunas",
            "state": "Utah",
            "zip": "49737"
        },
        "role": 'developer',

        "gender": "male",
        "portrait": "portraits/redrabbit642.jpg",
        "thumbnail": "portraits/redrabbit642-thumb.jpg"
    },
    {
        "id":23,
        "username": "beautifulcat2",
        "password": "1992",
        "name": {
            "first": "Kay",
            "last": "Walker"
        },
        "ssn": "739-82-8844",
        "dob": "1984-05-12T05:00:00.000Z",
        "hiredOn": "2004-12-20T06:00:00.000Z",
        "terminatedOn": null,
        "email": "kay.walker20@company.com",
        "phone": "149-237-2905",
        "address": {
            "street": "1323 W Campbell Ave",
            "city": "Evansville",
            "state": "Rhode Island",
            "zip": "53794"
        },
        "role": 'developer',
        "gender": "female",
        "portrait": "portraits/beautifulcat2.jpg",
        "thumbnail": "portraits/beautifulcat2-thumb.jpg"
    },
    {
        "id":24,
        "username": "lazypeacock969",
        "password": "hothot",
        "name": {
            "first": "Loretta",
            "last": "Coleman"
        },
        "ssn": "449-78-7552",
        "dob": "1968-11-08T06:00:00.000Z",
        "hiredOn": "1995-10-07T05:00:00.000Z",
        "terminatedOn": null,
        "email": "loretta.coleman49@company.com",
        "phone": "678-326-2799",
        "address": {
            "street": "5402 Central St",
            "city": "Boulder",
            "state": "Oklahoma",
            "zip": "43718"
        },
        "role": 'developer',
        "gender": "female",
        "portrait": "portraits/lazypeacock969.jpg",
        "thumbnail": "portraits/lazypeacock969-thumb.jpg"
    },
    {
        "id":0,
        "username": "biggoose954",
        "password": "1993",
        "name": {
            "first": "Stella",
            "last": "Ruiz"
        },
        "ssn": "337-27-4497",
        "dob": "1969-11-13T06:00:00.000Z",
        "hiredOn": "2008-02-07T06:00:00.000Z",
        "terminatedOn": null,
        "email": "stella.ruiz83@company.com",
        "phone": "207-500-3443",
        "address": {
            "street": "4982 W Sherman Dr",
            "city": "Lexington",
            "state": "Virginia",
            "zip": "46533"
        },
        "role": 'developer',
        "gender": "female",
        "portrait": "portraits/biggoose954.jpg",
        "thumbnail": "portraits/biggoose954-thumb.jpg"
    },
    {
        "id":25,
        "username": "bluerabbit187",
        "password": "kirk",
        "name": {
            "first": "Soham",
            "last": "Flores"
        },
        "ssn": "444-94-5888",
        "dob": "1981-07-13T05:00:00.000Z",
        "hiredOn": "2012-01-05T06:00:00.000Z",
        "terminatedOn": null,
        "email": "soham.flores34@company.com",
        "phone": "628-232-8534",
        "address": {
            "street": "5254 E North St",
            "city": "Joliet",
            "state": "Indiana",
            "zip": "76671"
        },
        "role": 'developer',
        "gender": "female",
        "portrait": "portraits/bluerabbit187.jpg",
        "thumbnail": "portraits/bluerabbit187-thumb.jpg"
    },
    {
        "id":26,
        "username": "crazyostrich528",
        "password": "preston",
        "name": {
            "first": "Leslie",
            "last": "Bates"
        },
        "ssn": "542-45-3230",
        "dob": "1965-03-08T06:00:00.000Z",
        "hiredOn": "1990-05-07T05:00:00.000Z",
        "terminatedOn": null,
        "email": "leslie.bates95@company.com",
        "phone": "890-543-2326",
        "address": {
            "street": "1741 W Pecan St",
            "city": "Forney",
            "state": "Ohio",
            "zip": "70913"
        },
        "role": 'developer',
        "gender": "female",
        "portrait": "portraits/crazyostrich528.jpg",
        "thumbnail": "portraits/crazyostrich528-thumb.jpg"
    },
    {
        "id":27,
        "username": "yellowbird585",
        "password": "lollipop",
        "name": {
            "first": "Jayden",
            "last": "Jackson"
        },
        "ssn": "185-45-3075",
        "dob": "1984-12-11T06:00:00.000Z",
        "hiredOn": "2009-03-25T05:00:00.000Z",
        "terminatedOn": "2013-07-28T05:00:00.000Z",
        "email": "jayden.perry28@company.com",
        "phone": "763-692-2070",
        "address": {
            "street": "1931 Mcgowen St",
            "city": "Helena",
            "state": "Delaware",
            "zip": "92581"
        },
        "role": 'developer',

        "gender": "male",
        "portrait": "portraits/yellowbird585.jpg",
        "thumbnail": "portraits/yellowbird585-thumb.jpg"
    },
    {
        "id":28,
        "username": "bluemeercat66",
        "password": "bigfoot",
        "name": {
            "first": "John",
            "last": "Fields"
        },
        "ssn": "416-33-5904",
        "dob": "1979-01-22T06:00:00.000Z",
        "hiredOn": "2005-10-10T05:00:00.000Z",
        "terminatedOn": "2009-02-15T06:00:00.000Z",
        "email": "herbert.fields50@company.com",
        "phone": "359-832-6262",
        "address": {
            "street": "9357 Adams St",
            "city": "Eureka",
            "state": "Maine",
            "zip": "27861"
        },
        "role": 'developer',
        "gender": "male",
        "portrait": "portraits/bluemeercat66.jpg",
        "thumbnail": "portraits/bluemeercat66-thumb.jpg"
    },
    {
        "id":29,
        "username": "ticklishgoose874",
        "password": "hakr",
        "name": {
            "first": "Leon",
            "last": "Gutierrez"
        },
        "ssn": "391-52-7701",
        "dob": "1965-05-25T05:00:00.000Z",
        "hiredOn": "2007-08-18T05:00:00.000Z",
        "terminatedOn": null,
        "email": "leon.gutierrez45@company.com",
        "phone": "204-199-8167",
        "address": {
            "street": "3224 Hunters Creek Dr",
            "city": "Lowell",
            "state": "South Dakota",
            "zip": "90553"
        },
        "role": 'developer',
        "gender": "male",
        "portrait": "portraits/ticklishgoose874.jpg",
        "thumbnail": "portraits/ticklishgoose874-thumb.jpg"
    },
]

export default staticData