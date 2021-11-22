'use strict';
const moment = require("moment");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Payments', [
      {
        id: 1,
        amount: 363.43,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 61,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        amount: 296.75,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        amount: 55.65,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        amount: 457.52,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 5,
        amount: 203.46,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 85,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 6,
        amount: 187.13,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 95,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 7,
        amount: 168.22,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 98,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 8,
        amount: 342.94,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 71,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 9,
        amount: 242,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 76,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 10,
        amount: 288.46,
        date: moment("01/11/21", "DD/MM/YY").toDate(),
        user_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 11,
        amount: 347.83,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 22,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 12,
        amount: 305.33,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 47,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 13,
        amount: 235.61,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 97,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 14,
        amount: 99.73,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 78,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 15,
        amount: 475.27,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 81,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 16,
        amount: 432.32,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 17,
        amount: 236.67,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 68,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 18,
        amount: 365.38,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 24,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 19,
        amount: 376.68,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 96,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 20,
        amount: 50.43,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 67,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 21,
        amount: 111.67,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 37,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 22,
        amount: 224.01,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 23,
        amount: 428.59,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 78,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 24,
        amount: 216.02,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 77,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 25,
        amount: 285.79,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 82,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 26,
        amount: 465.43,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 36,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 27,
        amount: 342.76,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 75,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 28,
        amount: 356.65,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 58,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 29,
        amount: 181.69,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 30,
        amount: 100.24,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 31,
        amount: 456.58,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 49,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 32,
        amount: 272.88,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 66,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 33,
        amount: 483.67,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 81,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 34,
        amount: 392.72,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 35,
        amount: 154.31,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 21,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 36,
        amount: 300.03,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 77,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 37,
        amount: 324,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 65,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 38,
        amount: 342.83,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 34,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 39,
        amount: 337.74,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 36,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 40,
        amount: 321.88,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 99,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 41,
        amount: 182.73,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 27,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 42,
        amount: 427.19,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 41,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 43,
        amount: 77.75,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 18,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 44,
        amount: 239.67,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 45,
        amount: 92.47,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 81,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 46,
        amount: 189.1,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 47,
        amount: 138.06,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 91,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 48,
        amount: 259.47,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 49,
        amount: 480.18,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 56,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 50,
        amount: 470.93,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 91,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 51,
        amount: 124.43,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 88,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 52,
        amount: 372.66,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 47,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 53,
        amount: 434.16,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 76,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 54,
        amount: 219.61,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 96,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 55,
        amount: 437.38,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 98,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 56,
        amount: 86.43,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 57,
        amount: 148.13,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 46,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 58,
        amount: 481.37,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 41,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 59,
        amount: 143.63,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 88,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 60,
        amount: 101.61,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 61,
        amount: 409.86,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 71,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 62,
        amount: 226.38,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 39,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 63,
        amount: 366.06,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 21,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 64,
        amount: 64.62,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 91,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 65,
        amount: 236.93,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 18,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 66,
        amount: 57.33,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 98,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 67,
        amount: 484.56,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 53,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 68,
        amount: 224.22,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 15,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 69,
        amount: 481.85,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 96,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 70,
        amount: 491.97,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 101,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 71,
        amount: 236.66,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 81,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 72,
        amount: 318.69,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 94,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 73,
        amount: 161.4,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 36,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 74,
        amount: 433.95,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 17,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 75,
        amount: 314.47,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 65,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 76,
        amount: 219.74,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 67,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 77,
        amount: 181.88,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 78,
        amount: 242.28,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 29,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 79,
        amount: 406.31,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 61,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 80,
        amount: 55.32,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 29,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 81,
        amount: 267.48,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 63,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 82,
        amount: 160.37,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 81,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 83,
        amount: 292.48,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 26,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 84,
        amount: 365.33,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 85,
        amount: 364.61,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 55,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 86,
        amount: 141.2,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 87,
        amount: 130.54,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 88,
        amount: 325.63,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 89,
        amount: 326.15,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 90,
        amount: 444.75,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 91,
        amount: 241.16,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 53,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 92,
        amount: 97.6,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 16,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 93,
        amount: 179.1,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 67,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 94,
        amount: 409.74,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 58,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 95,
        amount: 219.23,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 74,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 96,
        amount: 405.67,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 73,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 97,
        amount: 235.95,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 85,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 98,
        amount: 247.3,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 45,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 99,
        amount: 282.12,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 59,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 100,
        amount: 72.94,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 67,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 101,
        amount: 268.73,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 15,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 102,
        amount: 221.14,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 103,
        amount: 105.28,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 104,
        amount: 493.42,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 46,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 105,
        amount: 86.72,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 88,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 106,
        amount: 360.29,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 17,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 107,
        amount: 210.48,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 108,
        amount: 229.39,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 109,
        amount: 80.07,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 54,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 110,
        amount: 422.87,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 39,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 111,
        amount: 322.11,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 91,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 112,
        amount: 402.76,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 99,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 113,
        amount: 379.3,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 16,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 114,
        amount: 440.8,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 78,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 115,
        amount: 375.45,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 49,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 116,
        amount: 478.68,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 117,
        amount: 434.72,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 43,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 118,
        amount: 159.02,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 41,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 119,
        amount: 494.78,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 120,
        amount: 79.44,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 121,
        amount: 312.61,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 53,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 122,
        amount: 77.47,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 89,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 123,
        amount: 294.8,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 47,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 124,
        amount: 484.8,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 33,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 125,
        amount: 218.07,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 51,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 126,
        amount: 279.86,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 38,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 127,
        amount: 82.36,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 81,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 128,
        amount: 233.68,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 54,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 129,
        amount: 105.81,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 130,
        amount: 213.05,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 131,
        amount: 434.05,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 132,
        amount: 166.31,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 87,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 133,
        amount: 255.6,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 33,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 134,
        amount: 196.01,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 93,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 135,
        amount: 398.2,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 136,
        amount: 469.3,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 22,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 137,
        amount: 259.56,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 138,
        amount: 433.11,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 99,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 139,
        amount: 327.67,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 54,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 140,
        amount: 290.52,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 29,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 141,
        amount: 158.63,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 52,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 142,
        amount: 436.61,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 54,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 143,
        amount: 154.15,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 144,
        amount: 184.74,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 29,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 145,
        amount: 247.02,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 81,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 146,
        amount: 431.13,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 67,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 147,
        amount: 407.4,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 36,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 148,
        amount: 351.22,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 15,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 149,
        amount: 186.9,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 87,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 150,
        amount: 456.16,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 36,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 151,
        amount: 300.16,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 17,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 152,
        amount: 75.68,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 153,
        amount: 74.12,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 76,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 154,
        amount: 330.78,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 85,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 155,
        amount: 372.05,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 76,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 156,
        amount: 324.67,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 81,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 157,
        amount: 74.13,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 35,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 158,
        amount: 376.56,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 159,
        amount: 278.85,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 25,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 160,
        amount: 161.68,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 87,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 161,
        amount: 189.36,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 46,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 162,
        amount: 289.42,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 163,
        amount: 325.2,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 91,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 164,
        amount: 293.06,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 17,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 165,
        amount: 53.6,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 63,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 166,
        amount: 276.18,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 35,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 167,
        amount: 298.98,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 56,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 168,
        amount: 424.5,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 79,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 169,
        amount: 172.83,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 170,
        amount: 135.89,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 64,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 171,
        amount: 110.89,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 81,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 172,
        amount: 224.16,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 19,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 173,
        amount: 264.11,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 22,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 174,
        amount: 379.85,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 15,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 175,
        amount: 395.94,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 41,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 176,
        amount: 52.05,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 82,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 177,
        amount: 303.76,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 38,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 178,
        amount: 495.08,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 179,
        amount: 485.47,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 55,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 180,
        amount: 424.16,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 15,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 181,
        amount: 161.48,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 182,
        amount: 379.11,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 91,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 183,
        amount: 428.56,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 59,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 184,
        amount: 178.52,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 41,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 185,
        amount: 203.09,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 32,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 186,
        amount: 306.82,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 36,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 187,
        amount: 262.5,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 83,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 188,
        amount: 329.96,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 96,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 189,
        amount: 429.79,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 37,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 190,
        amount: 59.26,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 44,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 191,
        amount: 375.82,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 41,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 192,
        amount: 317.33,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 193,
        amount: 266.72,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 23,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 194,
        amount: 435.3,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 96,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 195,
        amount: 373.21,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 58,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 196,
        amount: 471.89,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 59,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 197,
        amount: 419.08,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 198,
        amount: 156.62,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 89,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 199,
        amount: 443.77,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 200,
        amount: 134.68,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 201,
        amount: 202.78,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 87,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 202,
        amount: 126.81,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 65,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 203,
        amount: 268.43,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 74,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 204,
        amount: 272.61,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 64,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 205,
        amount: 286.47,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 69,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 206,
        amount: 324.81,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 79,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 207,
        amount: 301.59,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 66,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 208,
        amount: 273.66,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 92,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 209,
        amount: 466.23,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 210,
        amount: 95.15,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 15,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 211,
        amount: 409.17,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 41,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 212,
        amount: 199.76,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 213,
        amount: 54.77,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 41,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 214,
        amount: 166.39,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 61,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 215,
        amount: 422.16,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 56,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 216,
        amount: 262.91,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 81,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 217,
        amount: 319.79,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 53,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 218,
        amount: 123.02,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 219,
        amount: 254.89,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 220,
        amount: 370.52,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 95,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 221,
        amount: 443.14,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 67,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 222,
        amount: 157.66,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 78,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 223,
        amount: 431.39,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 224,
        amount: 401.84,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 225,
        amount: 345.48,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 78,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 226,
        amount: 132.93,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 227,
        amount: 490.95,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 228,
        amount: 348.22,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 42,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 229,
        amount: 184.81,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 15,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 230,
        amount: 402.48,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 59,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 231,
        amount: 152.71,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 41,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 232,
        amount: 328.44,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 233,
        amount: 398.42,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 77,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 234,
        amount: 421.09,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 88,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 235,
        amount: 328.85,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 37,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 236,
        amount: 226.01,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 91,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 237,
        amount: 143.27,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 75,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 238,
        amount: 425.35,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 21,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 239,
        amount: 406.44,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 63,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 240,
        amount: 194.07,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 93,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 241,
        amount: 179.08,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 48,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 242,
        amount: 309.72,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 43,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 243,
        amount: 161.12,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 244,
        amount: 483.42,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 245,
        amount: 160.38,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 24,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 246,
        amount: 320.78,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 29,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 247,
        amount: 107.39,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 34,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 248,
        amount: 133.53,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 17,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 249,
        amount: 369.3,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 67,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 250,
        amount: 379.84,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 42,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 251,
        amount: 213.5,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 72,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 252,
        amount: 205.25,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 63,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 253,
        amount: 448.51,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 44,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 254,
        amount: 235.68,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 57,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 255,
        amount: 393.79,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 51,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 256,
        amount: 405.06,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 68,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 257,
        amount: 96.01,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 72,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 258,
        amount: 340.14,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 91,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 259,
        amount: 179.55,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 260,
        amount: 231.66,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 261,
        amount: 312.5,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 262,
        amount: 271.56,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 33,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 263,
        amount: 90.8,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 264,
        amount: 125.47,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 22,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 265,
        amount: 72.61,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 27,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 266,
        amount: 449.81,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 21,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 267,
        amount: 480.4,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 94,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 268,
        amount: 131.2,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 51,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 269,
        amount: 233.33,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 270,
        amount: 384.19,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 91,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 271,
        amount: 165.42,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 97,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 272,
        amount: 420.59,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 67,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 273,
        amount: 329.86,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 274,
        amount: 315.69,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 61,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 275,
        amount: 165.48,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 35,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 276,
        amount: 300.98,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 94,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 277,
        amount: 316.06,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 278,
        amount: 91.05,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 33,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 279,
        amount: 279.78,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 51,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 280,
        amount: 98.55,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 89,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 281,
        amount: 56.13,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 23,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 282,
        amount: 414.14,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 36,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 283,
        amount: 370.26,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 284,
        amount: 332.62,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 285,
        amount: 452.16,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 45,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 286,
        amount: 111.9,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 35,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 287,
        amount: 282.46,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 62,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 288,
        amount: 192.28,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 28,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 289,
        amount: 122.49,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 76,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 290,
        amount: 463.64,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 81,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 291,
        amount: 109.89,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 29,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 292,
        amount: 444.49,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 77,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 293,
        amount: 426.52,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 22,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 294,
        amount: 421.48,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 88,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 295,
        amount: 470.61,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 296,
        amount: 434.41,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 57,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 297,
        amount: 67.61,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 298,
        amount: 129.51,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 21,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 299,
        amount: 479.98,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 300,
        amount: 349.85,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 49,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 301,
        amount: 482.82,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 46,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 302,
        amount: 223.74,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 78,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 303,
        amount: 331.73,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 304,
        amount: 287.29,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 305,
        amount: 53.12,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 48,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 306,
        amount: 391.31,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 307,
        amount: 294.56,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 308,
        amount: 266.92,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 91,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 309,
        amount: 125.49,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 51,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 310,
        amount: 161.37,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 311,
        amount: 226.15,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 71,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 312,
        amount: 116.52,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 23,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 313,
        amount: 217.29,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 99,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 314,
        amount: 246.8,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 57,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 315,
        amount: 471.26,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 88,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 316,
        amount: 113.81,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 51,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 317,
        amount: 250.85,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 19,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 318,
        amount: 231.6,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 21,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 319,
        amount: 161.12,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 21,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 320,
        amount: 310.85,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 76,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 321,
        amount: 475.34,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 92,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 322,
        amount: 296.75,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 36,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 323,
        amount: 491.66,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 42,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 324,
        amount: 386.19,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 68,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 325,
        amount: 305.51,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 84,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 326,
        amount: 207.26,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 327,
        amount: 180.38,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 54,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 328,
        amount: 439.71,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 87,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 329,
        amount: 314.79,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 48,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 330,
        amount: 73.35,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 94,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 331,
        amount: 215.71,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 78,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 332,
        amount: 225.6,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 74,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 333,
        amount: 351.97,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 334,
        amount: 344.6,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 91,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 335,
        amount: 110.46,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 44,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 336,
        amount: 56.38,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 89,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 337,
        amount: 253.62,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 338,
        amount: 79.52,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 54,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 339,
        amount: 488.45,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 52,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 340,
        amount: 399.26,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 99,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 341,
        amount: 192.6,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 62,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 342,
        amount: 180.13,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 22,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 343,
        amount: 395.43,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 42,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 344,
        amount: 78.54,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 81,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 345,
        amount: 221.31,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 61,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 346,
        amount: 208.62,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 71,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 347,
        amount: 472.72,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 69,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 348,
        amount: 406.14,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 42,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 349,
        amount: 495.9,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 350,
        amount: 69.61,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 91,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 351,
        amount: 208.03,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 352,
        amount: 432.9,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 63,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 353,
        amount: 232.74,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 82,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 354,
        amount: 280.99,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 62,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 355,
        amount: 424.58,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 84,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 356,
        amount: 412.27,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 46,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 357,
        amount: 351.45,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 91,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 358,
        amount: 276.7,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 45,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 359,
        amount: 209.77,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 59,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 360,
        amount: 440.98,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 95,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 361,
        amount: 189.14,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 65,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 362,
        amount: 241.25,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 66,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 363,
        amount: 439.79,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 57,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 364,
        amount: 366.41,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 57,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 365,
        amount: 406.14,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 92,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 366,
        amount: 112.83,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 85,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 367,
        amount: 75.73,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 28,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 368,
        amount: 302.92,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 54,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 369,
        amount: 258.78,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 26,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 370,
        amount: 161.52,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 371,
        amount: 245.97,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 56,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 372,
        amount: 318.82,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 21,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 373,
        amount: 382.57,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 91,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 374,
        amount: 372.32,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 33,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 375,
        amount: 56.17,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 376,
        amount: 99.54,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 42,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 377,
        amount: 326.82,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 91,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 378,
        amount: 347.32,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 101,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 379,
        amount: 164.58,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 37,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 380,
        amount: 339.21,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 381,
        amount: 338.53,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 37,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 382,
        amount: 233.32,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 62,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 383,
        amount: 128.61,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 17,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 384,
        amount: 359.13,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 385,
        amount: 394.98,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 63,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 386,
        amount: 392.36,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 81,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 387,
        amount: 305.96,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 23,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 388,
        amount: 101.04,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 64,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 389,
        amount: 347.42,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 81,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 390,
        amount: 451.99,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 391,
        amount: 213.96,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 99,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 392,
        amount: 212.78,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 36,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 393,
        amount: 237.85,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 394,
        amount: 488.26,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 48,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 395,
        amount: 181.59,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 68,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 396,
        amount: 209.76,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 397,
        amount: 184.69,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 84,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 398,
        amount: 139.38,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 81,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 399,
        amount: 176.15,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 63,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 400,
        amount: 128.54,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 91,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 401,
        amount: 107.02,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 61,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 402,
        amount: 330.33,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 92,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 403,
        amount: 195.23,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 54,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 404,
        amount: 413.14,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 67,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 405,
        amount: 357.38,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 406,
        amount: 252.15,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 407,
        amount: 286.17,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 25,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 408,
        amount: 137.89,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 54,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 409,
        amount: 452.72,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 41,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 410,
        amount: 441.08,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 38,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 411,
        amount: 340.21,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 44,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 412,
        amount: 95.66,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 75,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 413,
        amount: 229,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 414,
        amount: 409.93,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 35,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 415,
        amount: 383.85,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 48,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 416,
        amount: 301.5,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 25,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 417,
        amount: 356.08,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 49,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 418,
        amount: 104.68,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 71,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 419,
        amount: 276.58,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 24,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 420,
        amount: 205.92,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 421,
        amount: 316.22,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 82,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 422,
        amount: 172.18,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 55,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 423,
        amount: 417.53,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 97,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 424,
        amount: 115.46,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 85,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 425,
        amount: 77.18,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 99,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 426,
        amount: 190.3,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 18,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 427,
        amount: 231.05,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 37,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 428,
        amount: 205.96,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 93,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 429,
        amount: 455.26,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 57,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 430,
        amount: 214.58,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 431,
        amount: 419.83,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 432,
        amount: 435.4,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 56,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 433,
        amount: 172.87,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 44,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 434,
        amount: 110.82,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 61,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 435,
        amount: 304.51,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 74,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 436,
        amount: 440.83,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 87,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 437,
        amount: 55.71,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 438,
        amount: 229.6,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 75,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 439,
        amount: 109.65,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 440,
        amount: 150.68,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 19,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 441,
        amount: 484.73,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 18,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 442,
        amount: 169.86,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 26,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 443,
        amount: 133.49,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 25,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 444,
        amount: 191.29,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 445,
        amount: 62.57,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 57,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 446,
        amount: 111.13,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 447,
        amount: 208.43,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 46,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 448,
        amount: 152.03,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 449,
        amount: 113.81,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 64,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 450,
        amount: 470.56,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 451,
        amount: 424.72,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 71,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 452,
        amount: 486.38,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 35,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 453,
        amount: 270.94,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 61,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 454,
        amount: 232.96,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 83,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 455,
        amount: 349.43,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 82,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 456,
        amount: 241.79,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 457,
        amount: 432.54,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 458,
        amount: 166.47,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 88,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 459,
        amount: 281.13,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 78,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 460,
        amount: 407.46,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 35,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 461,
        amount: 96.84,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 71,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 462,
        amount: 103.13,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 87,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 463,
        amount: 249.87,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 49,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 464,
        amount: 221.65,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 83,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 465,
        amount: 156.22,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 77,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 466,
        amount: 287.56,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 21,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 467,
        amount: 276.16,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 28,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 468,
        amount: 54.54,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 62,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 469,
        amount: 457.47,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 85,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 470,
        amount: 168.35,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 32,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 471,
        amount: 164.02,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 29,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 472,
        amount: 494.91,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 16,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 473,
        amount: 353.42,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 55,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 474,
        amount: 479.35,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 21,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 475,
        amount: 499.88,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 21,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 476,
        amount: 140.87,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 87,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 477,
        amount: 471.72,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 24,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 478,
        amount: 446.98,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 72,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 479,
        amount: 271.23,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 84,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 480,
        amount: 92.94,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 21,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 481,
        amount: 184.53,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 17,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 482,
        amount: 175.34,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 27,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 483,
        amount: 148.33,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 49,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 484,
        amount: 471.12,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 32,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 485,
        amount: 203.82,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 486,
        amount: 272.21,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 96,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 487,
        amount: 170.06,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 64,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 488,
        amount: 324.32,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 489,
        amount: 372.26,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 16,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 490,
        amount: 499.45,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 491,
        amount: 382.27,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 62,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 492,
        amount: 492.53,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 15,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 493,
        amount: 480.45,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 44,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 494,
        amount: 222.92,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 95,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 495,
        amount: 241.41,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 496,
        amount: 223.04,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 56,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 497,
        amount: 73.26,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 498,
        amount: 468.61,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 24,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 499,
        amount: 387.6,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 500,
        amount: 390.45,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 49,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 501,
        amount: 485.25,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 35,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 502,
        amount: 64.01,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 29,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 503,
        amount: 81.75,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 49,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 504,
        amount: 381.41,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 34,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 505,
        amount: 334.61,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 39,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 506,
        amount: 124.97,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 26,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 507,
        amount: 386.38,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 21,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 508,
        amount: 160.61,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 56,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 509,
        amount: 488.49,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 65,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 510,
        amount: 161.94,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 99,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 511,
        amount: 113.29,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 22,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 512,
        amount: 170.93,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 513,
        amount: 67.63,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 72,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 514,
        amount: 127.9,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 79,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 515,
        amount: 282.72,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 56,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 516,
        amount: 277.15,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 41,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 517,
        amount: 347.43,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 18,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 518,
        amount: 182.69,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 519,
        amount: 74.66,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 91,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 520,
        amount: 66.53,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 67,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 521,
        amount: 134.12,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 522,
        amount: 378.62,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 17,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 523,
        amount: 255.97,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 62,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 524,
        amount: 400.63,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 43,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 525,
        amount: 331.44,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 38,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 526,
        amount: 348.44,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 41,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 527,
        amount: 336.4,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 61,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 528,
        amount: 441.61,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 529,
        amount: 143.85,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 19,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 530,
        amount: 282.25,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 34,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 531,
        amount: 382.13,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 532,
        amount: 52.37,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 28,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 533,
        amount: 148.91,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 78,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 534,
        amount: 390.32,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 96,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 535,
        amount: 424.74,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 43,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 536,
        amount: 248.67,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 46,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 537,
        amount: 455.2,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 48,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 538,
        amount: 146.2,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 24,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 539,
        amount: 429.39,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 33,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 540,
        amount: 116.94,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 541,
        amount: 180.87,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 542,
        amount: 136.41,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 543,
        amount: 327.9,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 69,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 544,
        amount: 373.72,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 545,
        amount: 401.63,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 38,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 546,
        amount: 463.83,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 59,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 547,
        amount: 252.46,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 548,
        amount: 102.3,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 549,
        amount: 388.78,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 28,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 550,
        amount: 121.21,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 54,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 551,
        amount: 366.09,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 41,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 552,
        amount: 215.2,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 553,
        amount: 58.88,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 36,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 554,
        amount: 346.76,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 18,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 555,
        amount: 427.46,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 78,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 556,
        amount: 128.8,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 92,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 557,
        amount: 436.93,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 35,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 558,
        amount: 51.15,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 48,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 559,
        amount: 453.73,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 25,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 560,
        amount: 429.71,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 89,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 561,
        amount: 480.48,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 47,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 562,
        amount: 346.04,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 79,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 563,
        amount: 164.07,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 98,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 564,
        amount: 57.82,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 101,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 565,
        amount: 420.96,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 86,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 566,
        amount: 147.5,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 92,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 567,
        amount: 74.48,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 29,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 568,
        amount: 330.64,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 47,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 569,
        amount: 196.7,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 23,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 570,
        amount: 271.57,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 75,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 571,
        amount: 320.36,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 54,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 572,
        amount: 214.07,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 66,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 573,
        amount: 342.42,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 86,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 574,
        amount: 216.2,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 61,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 575,
        amount: 462.99,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 23,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 576,
        amount: 74.83,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 74,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 577,
        amount: 279.43,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 16,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 578,
        amount: 491.78,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 82,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 579,
        amount: 67.84,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 67,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 580,
        amount: 102.15,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 51,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 581,
        amount: 265.93,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 582,
        amount: 62.55,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 73,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 583,
        amount: 435.4,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 584,
        amount: 182.3,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 25,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 585,
        amount: 366.68,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 89,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 586,
        amount: 363.01,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 18,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 587,
        amount: 324.8,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 52,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 588,
        amount: 418.42,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 24,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 589,
        amount: 109.58,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 92,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 590,
        amount: 135.45,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 55,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 591,
        amount: 445.96,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 87,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 592,
        amount: 266,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 78,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 593,
        amount: 199.95,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 33,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 594,
        amount: 421.7,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 595,
        amount: 60.08,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 54,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 596,
        amount: 244.39,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 597,
        amount: 315.65,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 86,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 598,
        amount: 75.74,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 599,
        amount: 148.17,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 69,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 600,
        amount: 425.83,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 73,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 601,
        amount: 244.94,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 58,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 602,
        amount: 487.32,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 603,
        amount: 437.5,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 71,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 604,
        amount: 382.65,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 81,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 605,
        amount: 159.78,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 68,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 606,
        amount: 459.51,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 91,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 607,
        amount: 207.32,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 41,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 608,
        amount: 491.35,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 23,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 609,
        amount: 107.17,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 82,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 610,
        amount: 175.98,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 38,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 611,
        amount: 230.58,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 66,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 612,
        amount: 81.49,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 41,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 613,
        amount: 255.47,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 614,
        amount: 429.92,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 63,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 615,
        amount: 126.01,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 84,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 616,
        amount: 112.12,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 91,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 617,
        amount: 284.72,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 46,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 618,
        amount: 268.13,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 619,
        amount: 246.68,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 59,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 620,
        amount: 413.4,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 621,
        amount: 325.59,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 622,
        amount: 219.05,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 83,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 623,
        amount: 280.71,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 624,
        amount: 367.65,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 96,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 625,
        amount: 95.63,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 49,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 626,
        amount: 262.77,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 38,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 627,
        amount: 312.35,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 57,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 628,
        amount: 71,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 82,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 629,
        amount: 71.23,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 630,
        amount: 472.61,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 39,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 631,
        amount: 122.37,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 73,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 632,
        amount: 179.1,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 633,
        amount: 329.72,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 21,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 634,
        amount: 163.32,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 69,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 635,
        amount: 442.2,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 35,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 636,
        amount: 347.51,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 62,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 637,
        amount: 192.12,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 74,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 638,
        amount: 156.13,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 639,
        amount: 326.59,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 640,
        amount: 208.52,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 83,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 641,
        amount: 483.68,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 54,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 642,
        amount: 158.83,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 32,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 643,
        amount: 436.6,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 59,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 644,
        amount: 411.66,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 44,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 645,
        amount: 387.1,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 646,
        amount: 155.93,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 647,
        amount: 435.91,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 94,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 648,
        amount: 93.99,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 18,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 649,
        amount: 93.17,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 650,
        amount: 308.92,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 32,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 651,
        amount: 311.39,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 94,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 652,
        amount: 378.59,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 21,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 653,
        amount: 306.82,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 52,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 654,
        amount: 96.31,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 87,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 655,
        amount: 99.51,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 42,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 656,
        amount: 62.22,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 58,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 657,
        amount: 482.13,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 658,
        amount: 134.11,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 43,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 659,
        amount: 293.27,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 53,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 660,
        amount: 155.1,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 16,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 661,
        amount: 486.72,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 55,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 662,
        amount: 382.45,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 25,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 663,
        amount: 79.66,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 87,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 664,
        amount: 339.56,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 23,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 665,
        amount: 173.32,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 666,
        amount: 295.65,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 86,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 667,
        amount: 293.02,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 94,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 668,
        amount: 461.14,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 669,
        amount: 400.29,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 95,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 670,
        amount: 325.41,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 96,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 671,
        amount: 73.33,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 44,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 672,
        amount: 150.86,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 87,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 673,
        amount: 339.18,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 58,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 674,
        amount: 331.19,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 74,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 675,
        amount: 177.11,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 77,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 676,
        amount: 361.02,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 81,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 677,
        amount: 205.55,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 678,
        amount: 413.56,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 32,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 679,
        amount: 79.92,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 81,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 680,
        amount: 126.17,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 81,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 681,
        amount: 250.65,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 24,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 682,
        amount: 275.03,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 683,
        amount: 152.76,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 85,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 684,
        amount: 333.32,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 91,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 685,
        amount: 237.75,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 16,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 686,
        amount: 495.07,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 687,
        amount: 449.16,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 23,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 688,
        amount: 238.56,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 81,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 689,
        amount: 497.83,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 92,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 690,
        amount: 434.09,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 89,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 691,
        amount: 82.32,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 16,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 692,
        amount: 294.42,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 15,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 693,
        amount: 242.82,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 694,
        amount: 377.68,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 89,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 695,
        amount: 85.44,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 696,
        amount: 203.66,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 93,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 697,
        amount: 200.9,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 78,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 698,
        amount: 240.1,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 25,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 699,
        amount: 446.62,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 700,
        amount: 72.56,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 701,
        amount: 410.5,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 87,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 702,
        amount: 256.28,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 703,
        amount: 56.55,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 56,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 704,
        amount: 57.03,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 38,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 705,
        amount: 73.12,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 55,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 706,
        amount: 166.69,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 92,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 707,
        amount: 131.35,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 708,
        amount: 140.86,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 709,
        amount: 286.19,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 710,
        amount: 253.96,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 85,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 711,
        amount: 166.7,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 68,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 712,
        amount: 488.73,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 91,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 713,
        amount: 266.47,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 714,
        amount: 308.03,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 23,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 715,
        amount: 105.83,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 91,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 716,
        amount: 405.78,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 85,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 717,
        amount: 383.83,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 74,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 718,
        amount: 279.14,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 87,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 719,
        amount: 182.39,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 34,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 720,
        amount: 381.13,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 17,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 721,
        amount: 114.07,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 722,
        amount: 429.18,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 66,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 723,
        amount: 111.25,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 98,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 724,
        amount: 103.24,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 43,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 725,
        amount: 74.28,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 726,
        amount: 461.63,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 16,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 727,
        amount: 221.26,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 45,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 728,
        amount: 204.69,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 729,
        amount: 350.36,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 67,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 730,
        amount: 449.84,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 21,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 731,
        amount: 448.15,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 81,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 732,
        amount: 299.66,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 733,
        amount: 127.12,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 28,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 734,
        amount: 380.33,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 32,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 735,
        amount: 175.8,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 16,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 736,
        amount: 331.85,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 25,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 737,
        amount: 206.82,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 62,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 738,
        amount: 173.93,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 28,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 739,
        amount: 224.23,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 74,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 740,
        amount: 339.92,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 64,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 741,
        amount: 367.31,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 21,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 742,
        amount: 67.37,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 53,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 743,
        amount: 151.77,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 64,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 744,
        amount: 459.09,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 19,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 745,
        amount: 209.25,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 51,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 746,
        amount: 137.41,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 24,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 747,
        amount: 455.01,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 75,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 748,
        amount: 481.61,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 67,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 749,
        amount: 227.88,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 89,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 750,
        amount: 326.01,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 751,
        amount: 160.19,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 61,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 752,
        amount: 124.85,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 74,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 753,
        amount: 430.33,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 48,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 754,
        amount: 215.47,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 36,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 755,
        amount: 208.6,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 91,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 756,
        amount: 118.15,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 88,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 757,
        amount: 285.5,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 24,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 758,
        amount: 194.07,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 81,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 759,
        amount: 145.09,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 47,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 760,
        amount: 370.17,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 91,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 761,
        amount: 219.4,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 33,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 762,
        amount: 281.97,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 95,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 763,
        amount: 97.41,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 56,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 764,
        amount: 167.12,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 34,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 765,
        amount: 438.51,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 27,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 766,
        amount: 253.57,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 55,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 767,
        amount: 380.89,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 48,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 768,
        amount: 172.58,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 78,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 769,
        amount: 243.17,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 21,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 770,
        amount: 396.29,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 63,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 771,
        amount: 375.1,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 74,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 772,
        amount: 169.23,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 773,
        amount: 121.32,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 91,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 774,
        amount: 352.4,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 53,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 775,
        amount: 470.71,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 39,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 776,
        amount: 264.04,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 83,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 777,
        amount: 172.26,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 71,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 778,
        amount: 251.63,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 26,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 779,
        amount: 81.22,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 780,
        amount: 134.88,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 91,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 781,
        amount: 270.79,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 28,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 782,
        amount: 82.5,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 52,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 783,
        amount: 74.92,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 36,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 784,
        amount: 130.34,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 26,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 785,
        amount: 447.26,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 76,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 786,
        amount: 452.02,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 73,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 787,
        amount: 336.2,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 19,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 788,
        amount: 198.37,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 92,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 789,
        amount: 251.26,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 91,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 790,
        amount: 451.87,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 65,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 791,
        amount: 225.31,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 95,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 792,
        amount: 115.92,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 59,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 793,
        amount: 303.69,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 46,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 794,
        amount: 182.2,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 795,
        amount: 266.68,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 95,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 796,
        amount: 290.44,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 32,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 797,
        amount: 135.85,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 16,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 798,
        amount: 91.61,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 24,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 799,
        amount: 307.59,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 93,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 800,
        amount: 435.24,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 801,
        amount: 95.57,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 33,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 802,
        amount: 212.65,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 28,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 803,
        amount: 316.57,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 76,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 804,
        amount: 61.74,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 73,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 805,
        amount: 288.34,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 89,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 806,
        amount: 405.12,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 807,
        amount: 351.99,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 808,
        amount: 131.19,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 56,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 809,
        amount: 59.86,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 78,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 810,
        amount: 447.11,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 82,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 811,
        amount: 244.66,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 99,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 812,
        amount: 99.58,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 94,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 813,
        amount: 82.93,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 15,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 814,
        amount: 250.74,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 29,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 815,
        amount: 327.79,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 98,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 816,
        amount: 313.19,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 817,
        amount: 472.25,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 75,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 818,
        amount: 59.59,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 96,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 819,
        amount: 273.78,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 39,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 820,
        amount: 192.22,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 62,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 821,
        amount: 383.78,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 41,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 822,
        amount: 152.31,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 72,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 823,
        amount: 123.53,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 15,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 824,
        amount: 462.37,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 22,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 825,
        amount: 387.47,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 826,
        amount: 454.73,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 71,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 827,
        amount: 74.01,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 29,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 828,
        amount: 57.19,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 23,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 829,
        amount: 125.37,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 43,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 830,
        amount: 351.24,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 57,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 831,
        amount: 241.84,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 93,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 832,
        amount: 260.45,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 19,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 833,
        amount: 229.37,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 59,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 834,
        amount: 116.03,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 46,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 835,
        amount: 54.78,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 65,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 836,
        amount: 222.12,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 85,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 837,
        amount: 336.34,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 838,
        amount: 386.91,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 39,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 839,
        amount: 99.87,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 21,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 840,
        amount: 317.31,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 97,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 841,
        amount: 109.84,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 23,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 842,
        amount: 56.84,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 95,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 843,
        amount: 226.97,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 41,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 844,
        amount: 416.47,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 54,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 845,
        amount: 359.55,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 72,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 846,
        amount: 189.08,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 74,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 847,
        amount: 133.6,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 84,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 848,
        amount: 414.3,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 55,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 849,
        amount: 311.67,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 89,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 850,
        amount: 301.14,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 851,
        amount: 153.31,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 78,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 852,
        amount: 163.47,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 77,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 853,
        amount: 234.2,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 854,
        amount: 55.38,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 855,
        amount: 488.25,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 63,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 856,
        amount: 265.79,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 22,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 857,
        amount: 163.13,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 72,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 858,
        amount: 269.85,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 26,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 859,
        amount: 405.37,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 43,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 860,
        amount: 73.17,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 46,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 861,
        amount: 112.68,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 68,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 862,
        amount: 494.04,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 96,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 863,
        amount: 92.69,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 18,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 864,
        amount: 194.97,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 38,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 865,
        amount: 381.78,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 59,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 866,
        amount: 383.33,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 24,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 867,
        amount: 216.4,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 42,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 868,
        amount: 316.56,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 87,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 869,
        amount: 57.86,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 870,
        amount: 216.44,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 92,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 871,
        amount: 294.43,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 21,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 872,
        amount: 331.8,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 94,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 873,
        amount: 64.31,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 36,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 874,
        amount: 248.12,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 875,
        amount: 428.29,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 61,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 876,
        amount: 337.99,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 49,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 877,
        amount: 62.19,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 85,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 878,
        amount: 367.17,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 76,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 879,
        amount: 157.37,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 880,
        amount: 110.46,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 53,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 881,
        amount: 159.69,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 81,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 882,
        amount: 406.9,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 93,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 883,
        amount: 375.63,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 21,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 884,
        amount: 412.1,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 34,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 885,
        amount: 347.74,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 886,
        amount: 232.23,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 75,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 887,
        amount: 243.03,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 35,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 888,
        amount: 437.95,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 69,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 889,
        amount: 65.47,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 51,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 890,
        amount: 284.14,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 69,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 891,
        amount: 291.28,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 892,
        amount: 368.48,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 71,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 893,
        amount: 290.79,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 56,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 894,
        amount: 390.09,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 895,
        amount: 195.54,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 57,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 896,
        amount: 170.93,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 43,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 897,
        amount: 454.05,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 18,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 898,
        amount: 399.44,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 93,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 899,
        amount: 162.43,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 900,
        amount: 195.22,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 83,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 901,
        amount: 168.87,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 88,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 902,
        amount: 72.79,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 903,
        amount: 123.22,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 81,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 904,
        amount: 186.88,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 905,
        amount: 366.65,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 33,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 906,
        amount: 252.71,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 53,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 907,
        amount: 480.61,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 908,
        amount: 399.45,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 101,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 909,
        amount: 432.88,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 58,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 910,
        amount: 407.21,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 37,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 911,
        amount: 178.96,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 21,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 912,
        amount: 81.41,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 97,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 913,
        amount: 363.27,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 914,
        amount: 215.95,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 62,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 915,
        amount: 410.15,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 25,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 916,
        amount: 109.38,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 61,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 917,
        amount: 402.97,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 918,
        amount: 449.88,
        date: moment("01/03/21", "DD/MM/YY").toDate(),
        user_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 919,
        amount: 85.91,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 59,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 920,
        amount: 216.39,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 921,
        amount: 226.29,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 66,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 922,
        amount: 199.96,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 98,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 923,
        amount: 370.26,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 61,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 924,
        amount: 230.99,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 74,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 925,
        amount: 188,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 24,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 926,
        amount: 446.47,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 16,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 927,
        amount: 451.45,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 61,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 928,
        amount: 239.7,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 89,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 929,
        amount: 137.27,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 35,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 930,
        amount: 106.51,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 27,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 931,
        amount: 267.56,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 43,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 932,
        amount: 478.46,
        date: moment("15/04/21", "DD/MM/YY").toDate(),
        user_id: 49,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 933,
        amount: 85.16,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 934,
        amount: 353.24,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 88,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 935,
        amount: 432.64,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 34,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 936,
        amount: 432.51,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 98,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 937,
        amount: 335.29,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 94,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 938,
        amount: 308.78,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 19,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 939,
        amount: 233.08,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 98,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 940,
        amount: 469.07,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 38,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 941,
        amount: 457.67,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 942,
        amount: 223.87,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 96,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 943,
        amount: 425.91,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 101,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 944,
        amount: 349.73,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 23,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 945,
        amount: 59.26,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 29,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 946,
        amount: 488.25,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 24,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 947,
        amount: 152.89,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 28,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 948,
        amount: 245.75,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 25,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 949,
        amount: 345.79,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 22,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 950,
        amount: 79.83,
        date: moment("01/10/21", "DD/MM/YY").toDate(),
        user_id: 99,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 951,
        amount: 244.69,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 66,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 952,
        amount: 86.93,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 75,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 953,
        amount: 96.43,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 954,
        amount: 387.48,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 94,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 955,
        amount: 410.74,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 23,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 956,
        amount: 256.4,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 99,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 957,
        amount: 299.02,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 84,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 958,
        amount: 264.6,
        date: moment("01/06/21", "DD/MM/YY").toDate(),
        user_id: 27,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 959,
        amount: 477.49,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 71,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 960,
        amount: 338.7,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 67,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 961,
        amount: 264.23,
        date: moment("15/07/21", "DD/MM/YY").toDate(),
        user_id: 15,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 962,
        amount: 398.51,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 963,
        amount: 277.84,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 84,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 964,
        amount: 98.62,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 61,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 965,
        amount: 250.25,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 45,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 966,
        amount: 472.55,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 71,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 967,
        amount: 379.56,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 96,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 968,
        amount: 491.63,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 93,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 969,
        amount: 81.72,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 22,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 970,
        amount: 94.05,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 19,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 971,
        amount: 346.13,
        date: moment("01/09/21", "DD/MM/YY").toDate(),
        user_id: 62,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 972,
        amount: 199.37,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 27,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 973,
        amount: 412.35,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 42,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 974,
        amount: 251.31,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 96,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 975,
        amount: 188.68,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 93,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 976,
        amount: 360.87,
        date: moment("15/02/21", "DD/MM/YY").toDate(),
        user_id: 46,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 977,
        amount: 398.08,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 39,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 978,
        amount: 308.74,
        date: moment("15/08/21", "DD/MM/YY").toDate(),
        user_id: 83,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 979,
        amount: 318.53,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 54,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 980,
        amount: 455.57,
        date: moment("01/04/21", "DD/MM/YY").toDate(),
        user_id: 21,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 981,
        amount: 243.96,
        date: moment("15/03/21", "DD/MM/YY").toDate(),
        user_id: 94,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 982,
        amount: 129.75,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 28,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 983,
        amount: 315.87,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 41,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 984,
        amount: 334.33,
        date: moment("01/07/21", "DD/MM/YY").toDate(),
        user_id: 85,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 985,
        amount: 363.72,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 55,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 986,
        amount: 367.47,
        date: moment("15/06/21", "DD/MM/YY").toDate(),
        user_id: 95,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 987,
        amount: 426.63,
        date: moment("01/05/21", "DD/MM/YY").toDate(),
        user_id: 53,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 988,
        amount: 274.57,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 92,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 989,
        amount: 218.05,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 39,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 990,
        amount: 74.2,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 75,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 991,
        amount: 362.88,
        date: moment("15/01/21", "DD/MM/YY").toDate(),
        user_id: 51,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 992,
        amount: 85.55,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 98,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 993,
        amount: 400.43,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 44,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 994,
        amount: 72.03,
        date: moment("15/05/21", "DD/MM/YY").toDate(),
        user_id: 68,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 995,
        amount: 202.35,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 16,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 996,
        amount: 213.24,
        date: moment("01/02/21", "DD/MM/YY").toDate(),
        user_id: 92,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 997,
        amount: 187.63,
        date: moment("15/10/21", "DD/MM/YY").toDate(),
        user_id: 36,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 998,
        amount: 473.71,
        date: moment("15/09/21", "DD/MM/YY").toDate(),
        user_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 999,
        amount: 437.85,
        date: moment("01/08/21", "DD/MM/YY").toDate(),
        user_id: 35,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 1000,
        amount: 118.61,
        date: moment("01/01/21", "DD/MM/YY").toDate(),
        user_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    throw new Error('Payment seeder can not be rolled back.')
  }
};
