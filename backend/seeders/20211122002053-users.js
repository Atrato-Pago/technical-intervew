'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        first_name: "Markus",
        last_name: "Blaschek",
        email: "mblaschek0@apache.org",
        gender: "Agender",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        first_name: "Barbara",
        last_name: "Isaq",
        email: "bisaq1@imageshack.us",
        gender: "Polygender",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        first_name: "Francisca",
        last_name: "Farmloe",
        email: "ffarmloe2@usnews.com",
        gender: "Female",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        first_name: "Woodman",
        last_name: "Anderer",
        email: "wanderer3@simplemachines.org",
        gender: "Genderfluid",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 5,
        first_name: "Mei",
        last_name: "Kennealy",
        email: "mkennealy4@friendfeed.com",
        gender: "Genderfluid",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 6,
        first_name: "Yorgo",
        last_name: "Hedan",
        email: "yhedan5@seattletimes.com",
        gender: "Female",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 7,
        first_name: "Emeline",
        last_name: "Cooke",
        email: "ecooke6@boston.com",
        gender: "Polygender",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 8,
        first_name: "Demeter",
        last_name: "Turgoose",
        email: "dturgoose7@webmd.com",
        gender: "Non-binary",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 9,
        first_name: "Sharline",
        last_name: "Louthe",
        email: "slouthe8@behance.net",
        gender: "Male",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 10,
        first_name: "Ryann",
        last_name: "Grodden",
        email: "rgrodden9@elegantthemes.com",
        gender: "Genderfluid",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 11,
        first_name: "Vin",
        last_name: "Glader",
        email: "vgladera@ameblo.jp",
        gender: "Genderfluid",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 12,
        first_name: "Nobie",
        last_name: "Serfati",
        email: "nserfatib@java.com",
        gender: "Bigender",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 13,
        first_name: "Geri",
        last_name: "Boanas",
        email: "gboanasc@wp.com",
        gender: "Female",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 14,
        first_name: "Keelia",
        last_name: "Yakunin",
        email: "kyakunind@baidu.com",
        gender: "Agender",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 15,
        first_name: "Enrique",
        last_name: "Eddow",
        email: "eeddowe@unesco.org",
        gender: "Male",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 16,
        first_name: "Nesta",
        last_name: "Washington",
        email: "nwashingtonf@seattletimes.com",
        gender: "Bigender",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 17,
        first_name: "Heddi",
        last_name: "Antowski",
        email: "hantowskig@vk.com",
        gender: "Genderqueer",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 18,
        first_name: "Jeni",
        last_name: "Latch",
        email: "jlatchh@seesaa.net",
        gender: "Non-binary",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 19,
        first_name: "Vinny",
        last_name: "Unitt",
        email: "vunitti@google.ru",
        gender: "Female",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 20,
        first_name: "Shaylah",
        last_name: "Pearsall",
        email: "spearsallj@163.com",
        gender: "Bigender",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 21,
        first_name: "Lexine",
        last_name: "Airdrie",
        email: "lairdriek@hostgator.com",
        gender: "Agender",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 22,
        first_name: "Paxton",
        last_name: "Venard",
        email: "pvenardl@discovery.com",
        gender: "Bigender",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 23,
        first_name: "Ali",
        last_name: "Trainor",
        email: "atrainorm@usnews.com",
        gender: "Genderfluid",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 24,
        first_name: "Sena",
        last_name: "Beddis",
        email: "sbeddisn@webnode.com",
        gender: "Genderfluid",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 25,
        first_name: "Martainn",
        last_name: "Seven",
        email: "mseveno@goo.ne.jp",
        gender: "Female",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 26,
        first_name: "Tally",
        last_name: "Lathwell",
        email: "tlathwellp@microsoft.com",
        gender: "Female",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 27,
        first_name: "Janean",
        last_name: "Lipmann",
        email: "jlipmannq@live.com",
        gender: "Female",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 28,
        first_name: "Sharona",
        last_name: "Spragge",
        email: "sspragger@google.com.au",
        gender: "Polygender",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 29,
        first_name: "Minni",
        last_name: "Lammenga",
        email: "mlammengas@seattletimes.com",
        gender: "Agender",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 30,
        first_name: "Cristian",
        last_name: "Crankshaw",
        email: "ccrankshawt@vimeo.com",
        gender: "Bigender",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 31,
        first_name: "Hugibert",
        last_name: "Harbach",
        email: "hharbachu@aboutads.info",
        gender: "Polygender",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 32,
        first_name: "Katharine",
        last_name: "Millions",
        email: "kmillionsv@multiply.com",
        gender: "Non-binary",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 33,
        first_name: "Delano",
        last_name: "Attoe",
        email: "dattoew@mapquest.com",
        gender: "Genderfluid",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 34,
        first_name: "Erskine",
        last_name: "Ginnally",
        email: "eginnallyx@hp.com",
        gender: "Male",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 35,
        first_name: "Godart",
        last_name: "Askin",
        email: "gaskiny@discuz.net",
        gender: "Polygender",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 36,
        first_name: "Sayer",
        last_name: "Boldt",
        email: "sboldtz@fc2.com",
        gender: "Female",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 37,
        first_name: "Vallie",
        last_name: "Leades",
        email: "vleades10@ucoz.ru",
        gender: "Genderfluid",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 38,
        first_name: "Maurita",
        last_name: "Booth",
        email: "mbooth11@posterous.com",
        gender: "Genderfluid",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 39,
        first_name: "Benedicta",
        last_name: "Tumbridge",
        email: "btumbridge12@cam.ac.uk",
        gender: "Bigender",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 40,
        first_name: "Sarette",
        last_name: "Mapples",
        email: "smapples13@symantec.com",
        gender: "Non-binary",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 41,
        first_name: "Barrett",
        last_name: "Zoppie",
        email: "bzoppie14@biblegateway.com",
        gender: "Male",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 42,
        first_name: "Yuri",
        last_name: "Castille",
        email: "ycastille15@php.net",
        gender: "Bigender",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 43,
        first_name: "Bevan",
        last_name: "Keaveney",
        email: "bkeaveney16@homestead.com",
        gender: "Male",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 44,
        first_name: "Lauretta",
        last_name: "Hobgen",
        email: "lhobgen17@mtv.com",
        gender: "Genderqueer",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 45,
        first_name: "Ingram",
        last_name: "Halbard",
        email: "ihalbard18@apache.org",
        gender: "Male",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 46,
        first_name: "Bruce",
        last_name: "Reason",
        email: "breason19@51.la",
        gender: "Polygender",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 47,
        first_name: "Michel",
        last_name: "Shoveller",
        email: "mshoveller1a@printfriendly.com",
        gender: "Female",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 48,
        first_name: "Janet",
        last_name: "Wimmer",
        email: "jwimmer1b@elpais.com",
        gender: "Bigender",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 49,
        first_name: "Rory",
        last_name: "Hefferan",
        email: "rhefferan1c@paypal.com",
        gender: "Female",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 50,
        first_name: "Drew",
        last_name: "Winslett",
        email: "dwinslett1d@gizmodo.com",
        gender: "Polygender",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 51,
        first_name: "Elijah",
        last_name: "Edy",
        email: "eedy1e@domainmarket.com",
        gender: "Non-binary",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 52,
        first_name: "Marcel",
        last_name: "Rudyard",
        email: "mrudyard1f@geocities.jp",
        gender: "Genderfluid",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 53,
        first_name: "Alison",
        last_name: "Burhouse",
        email: "aburhouse1g@marketwatch.com",
        gender: "Bigender",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 54,
        first_name: "Pepi",
        last_name: "Hacking",
        email: "phacking1h@geocities.jp",
        gender: "Polygender",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 55,
        first_name: "Hank",
        last_name: "Illingworth",
        email: "hillingworth1i@nbcnews.com",
        gender: "Bigender",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 56,
        first_name: "Elicia",
        last_name: "Crimpe",
        email: "ecrimpe1j@nps.gov",
        gender: "Polygender",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 57,
        first_name: "Lucius",
        last_name: "Durrington",
        email: "ldurrington1k@furl.net",
        gender: "Male",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 58,
        first_name: "Herman",
        last_name: "Prangnell",
        email: "hprangnell1l@howstuffworks.com",
        gender: "Non-binary",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 59,
        first_name: "Ellen",
        last_name: "Gavrielly",
        email: "egavrielly1m@utexas.edu",
        gender: "Bigender",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 60,
        first_name: "Wynn",
        last_name: "Allsobrook",
        email: "wallsobrook1n@free.fr",
        gender: "Genderfluid",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 61,
        first_name: "Shawnee",
        last_name: "Ellsbury",
        email: "sellsbury1o@globo.com",
        gender: "Genderqueer",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 62,
        first_name: "Caspar",
        last_name: "Brigge",
        email: "cbrigge1p@eepurl.com",
        gender: "Genderqueer",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 63,
        first_name: "Randal",
        last_name: "Buy",
        email: "rbuy1q@arstechnica.com",
        gender: "Bigender",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 64,
        first_name: "Rachel",
        last_name: "Dowson",
        email: "rdowson1r@cdbaby.com",
        gender: "Bigender",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 65,
        first_name: "Lynnet",
        last_name: "Sarjant",
        email: "lsarjant1s@aboutads.info",
        gender: "Genderqueer",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 66,
        first_name: "Doralia",
        last_name: "Gynni",
        email: "dgynni1t@cafepress.com",
        gender: "Bigender",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 67,
        first_name: "Taddeusz",
        last_name: "Emberton",
        email: "temberton1u@tripod.com",
        gender: "Female",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 68,
        first_name: "Millisent",
        last_name: "Comley",
        email: "mcomley1v@npr.org",
        gender: "Genderqueer",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 69,
        first_name: "Aubrey",
        last_name: "De Metz",
        email: "ademetz1w@aboutads.info",
        gender: "Female",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 70,
        first_name: "Patten",
        last_name: "Thickens",
        email: "pthickens1x@boston.com",
        gender: "Agender",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 71,
        first_name: "Glenine",
        last_name: "Laible",
        email: "glaible1y@homestead.com",
        gender: "Female",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 72,
        first_name: "Thorpe",
        last_name: "Loudian",
        email: "tloudian1z@google.com.au",
        gender: "Female",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 73,
        first_name: "Penn",
        last_name: "Flawn",
        email: "pflawn20@altervista.org",
        gender: "Male",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 74,
        first_name: "Gustav",
        last_name: "Glazer",
        email: "gglazer21@histats.com",
        gender: "Agender",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 75,
        first_name: "Kylila",
        last_name: "O'Connolly",
        email: "koconnolly22@prnewswire.com",
        gender: "Bigender",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 76,
        first_name: "Eran",
        last_name: "Pascho",
        email: "epascho23@printfriendly.com",
        gender: "Genderqueer",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 77,
        first_name: "Aldis",
        last_name: "Vegas",
        email: "avegas24@scientificamerican.com",
        gender: "Agender",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 78,
        first_name: "Filippo",
        last_name: "Henrionot",
        email: "fhenrionot25@dyndns.org",
        gender: "Agender",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 79,
        first_name: "Demott",
        last_name: "Castelyn",
        email: "dcastelyn26@sourceforge.net",
        gender: "Agender",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 80,
        first_name: "Eward",
        last_name: "Brodeur",
        email: "ebrodeur27@typepad.com",
        gender: "Genderqueer",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 81,
        first_name: "Mirna",
        last_name: "Rounsefull",
        email: "mrounsefull28@forbes.com",
        gender: "Non-binary",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 82,
        first_name: "Dru",
        last_name: "Penberthy",
        email: "dpenberthy29@samsung.com",
        gender: "Agender",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 83,
        first_name: "Pavel",
        last_name: "Halt",
        email: "phalt2a@oaic.gov.au",
        gender: "Bigender",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 84,
        first_name: "Hortensia",
        last_name: "Pedron",
        email: "hpedron2b@amazon.com",
        gender: "Non-binary",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 85,
        first_name: "Mahalia",
        last_name: "Stuchburie",
        email: "mstuchburie2c@cloudflare.com",
        gender: "Female",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 86,
        first_name: "Elisa",
        last_name: "Setford",
        email: "esetford2d@goo.ne.jp",
        gender: "Agender",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 87,
        first_name: "Trey",
        last_name: "Rixon",
        email: "trixon2e@youtube.com",
        gender: "Polygender",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 88,
        first_name: "Vonnie",
        last_name: "Wilsone",
        email: "vwilsone2f@army.mil",
        gender: "Bigender",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 89,
        first_name: "Ardath",
        last_name: "Boles",
        email: "aboles2g@mysql.com",
        gender: "Genderqueer",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 90,
        first_name: "Sarena",
        last_name: "Batch",
        email: "sbatch2h@foxnews.com",
        gender: "Polygender",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 91,
        first_name: "Gustav",
        last_name: "Wigzell",
        email: "gwigzell2i@yolasite.com",
        gender: "Non-binary",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 92,
        first_name: "Malena",
        last_name: "Castanone",
        email: "mcastanone2j@ucoz.com",
        gender: "Genderfluid",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 93,
        first_name: "Barbee",
        last_name: "Pawfoot",
        email: "bpawfoot2k@vistaprint.com",
        gender: "Female",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 94,
        first_name: "Gray",
        last_name: "Whittleton",
        email: "gwhittleton2l@tripod.com",
        gender: "Polygender",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 95,
        first_name: "Nannie",
        last_name: "Pinniger",
        email: "npinniger2m@economist.com",
        gender: "Bigender",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 96,
        first_name: "Willi",
        last_name: "Keets",
        email: "wkeets2n@altervista.org",
        gender: "Agender",
        is_biweekly: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 97,
        first_name: "Sheri",
        last_name: "Pococke",
        email: "spococke2o@godaddy.com",
        gender: "Male",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 98,
        first_name: "Hansiain",
        last_name: "Callear",
        email: "hcallear2p@ameblo.jp",
        gender: "Genderfluid",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 99,
        first_name: "Mord",
        last_name: "Connichie",
        email: "mconnichie2q@auda.org.au",
        gender: "Female",
        is_biweekly: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 100,
        first_name: "Yvonne",
        last_name: "Bonnyson",
        email: "ybonnyson2r@ucoz.ru",
        gender: "Female",
        is_biweekly: false
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    throw new Error('User seeder can not be rolled back.')
  }
};
