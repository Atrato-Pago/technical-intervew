'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Subcriptions', [
      {
        id: 1,
        user_id: 32,
        platform_id: 1
      },
      {
        id: 2,
        user_id: 1,
        platform_id: 1
      },
      {
        id: 3,
        user_id: 7,
        platform_id: 1
      },
      {
        id: 4,
        user_id: 100,
        platform_id: 2
      },
      {
        id: 5,
        user_id: 87,
        platform_id: 2
      },
      {
        id: 6,
        user_id: 26,
        platform_id: 1
      },
      {
        id: 7,
        user_id: 50,
        platform_id: 3
      },
      {
        id: 8,
        user_id: 38,
        platform_id: 2
      },
      {
        id: 9,
        user_id: 14,
        platform_id: 3
      },
      {
        id: 10,
        user_id: 3,
        platform_id: 2
      },
      {
        id: 11,
        user_id: 3,
        platform_id: 1
      },
      {
        id: 12,
        user_id: 98,
        platform_id: 2
      },
      {
        id: 13,
        user_id: 80,
        platform_id: 3
      },
      {
        id: 14,
        user_id: 75,
        platform_id: 1
      },
      {
        id: 15,
        user_id: 62,
        platform_id: 1
      },
      {
        id: 16,
        user_id: 74,
        platform_id: 3
      },
      {
        id: 17,
        user_id: 15,
        platform_id: 1
      },
      {
        id: 18,
        user_id: 78,
        platform_id: 2
      },
      {
        id: 19,
        user_id: 70,
        platform_id: 2
      },
      {
        id: 20,
        user_id: 21,
        platform_id: 1
      },
      {
        id: 21,
        user_id: 83,
        platform_id: 2
      },
      {
        id: 22,
        user_id: 37,
        platform_id: 2
      },
      {
        id: 23,
        user_id: 39,
        platform_id: 2
      },
      {
        id: 24,
        user_id: 33,
        platform_id: 1
      },
      {
        id: 25,
        user_id: 40,
        platform_id: 3
      },
      {
        id: 26,
        user_id: 19,
        platform_id: 3
      },
      {
        id: 27,
        user_id: 97,
        platform_id: 3
      },
      {
        id: 28,
        user_id: 75,
        platform_id: 2
      },
      {
        id: 29,
        user_id: 85,
        platform_id: 2
      },
      {
        id: 30,
        user_id: 4,
        platform_id: 1
      },
      {
        id: 31,
        user_id: 41,
        platform_id: 3
      },
      {
        id: 32,
        user_id: 86,
        platform_id: 3
      },
      {
        id: 33,
        user_id: 89,
        platform_id: 1
      },
      {
        id: 34,
        user_id: 55,
        platform_id: 2
      },
      {
        id: 35,
        user_id: 48,
        platform_id: 3
      },
      {
        id: 36,
        user_id: 63,
        platform_id: 2
      },
      {
        id: 37,
        user_id: 32,
        platform_id: 3
      },
      {
        id: 38,
        user_id: 25,
        platform_id: 1
      },
      {
        id: 39,
        user_id: 29,
        platform_id: 2
      },
      {
        id: 40,
        user_id: 34,
        platform_id: 2
      },
      {
        id: 41,
        user_id: 47,
        platform_id: 3
      },
      {
        id: 42,
        user_id: 28,
        platform_id: 2
      },
      {
        id: 43,
        user_id: 60,
        platform_id: 1
      },
      {
        id: 44,
        user_id: 34,
        platform_id: 2
      },
      {
        id: 45,
        user_id: 31,
        platform_id: 3
      },
      {
        id: 46,
        user_id: 50,
        platform_id: 3
      },
      {
        id: 47,
        user_id: 41,
        platform_id: 1
      },
      {
        id: 48,
        user_id: 85,
        platform_id: 2
      },
      {
        id: 49,
        user_id: 10,
        platform_id: 2
      },
      {
        id: 50,
        user_id: 4,
        platform_id: 1
      },
      {
        id: 51,
        user_id: 6,
        platform_id: 3
      },
      {
        id: 52,
        user_id: 20,
        platform_id: 3
      },
      {
        id: 53,
        user_id: 66,
        platform_id: 3
      },
      {
        id: 54,
        user_id: 32,
        platform_id: 3
      },
      {
        id: 55,
        user_id: 13,
        platform_id: 3
      },
      {
        id: 56,
        user_id: 79,
        platform_id: 1
      },
      {
        id: 57,
        user_id: 88,
        platform_id: 1
      },
      {
        id: 58,
        user_id: 43,
        platform_id: 1
      },
      {
        id: 59,
        user_id: 11,
        platform_id: 3
      },
      {
        id: 60,
        user_id: 32,
        platform_id: 1
      },
      {
        id: 61,
        user_id: 14,
        platform_id: 2
      },
      {
        id: 62,
        user_id: 77,
        platform_id: 1
      },
      {
        id: 63,
        user_id: 35,
        platform_id: 2
      },
      {
        id: 64,
        user_id: 65,
        platform_id: 3
      },
      {
        id: 65,
        user_id: 51,
        platform_id: 2
      },
      {
        id: 66,
        user_id: 90,
        platform_id: 3
      },
      {
        id: 67,
        user_id: 93,
        platform_id: 2
      },
      {
        id: 68,
        user_id: 92,
        platform_id: 1
      },
      {
        id: 69,
        user_id: 70,
        platform_id: 3
      },
      {
        id: 70,
        user_id: 21,
        platform_id: 1
      },
      {
        id: 71,
        user_id: 51,
        platform_id: 3
      },
      {
        id: 72,
        user_id: 32,
        platform_id: 3
      },
      {
        id: 73,
        user_id: 34,
        platform_id: 2
      },
      {
        id: 74,
        user_id: 52,
        platform_id: 3
      },
      {
        id: 75,
        user_id: 88,
        platform_id: 3
      },
      {
        id: 76,
        user_id: 28,
        platform_id: 1
      },
      {
        id: 77,
        user_id: 6,
        platform_id: 3
      },
      {
        id: 78,
        user_id: 11,
        platform_id: 3
      },
      {
        id: 79,
        user_id: 86,
        platform_id: 3
      },
      {
        id: 80,
        user_id: 51,
        platform_id: 2
      },
      {
        id: 81,
        user_id: 80,
        platform_id: 3
      },
      {
        id: 82,
        user_id: 72,
        platform_id: 1
      },
      {
        id: 83,
        user_id: 55,
        platform_id: 2
      },
      {
        id: 84,
        user_id: 58,
        platform_id: 1
      },
      {
        id: 85,
        user_id: 1,
        platform_id: 3
      },
      {
        id: 86,
        user_id: 52,
        platform_id: 1
      },
      {
        id: 87,
        user_id: 17,
        platform_id: 2
      },
      {
        id: 88,
        user_id: 50,
        platform_id: 1
      },
      {
        id: 89,
        user_id: 66,
        platform_id: 1
      },
      {
        id: 90,
        user_id: 43,
        platform_id: 2
      },
      {
        id: 91,
        user_id: 5,
        platform_id: 2
      },
      {
        id: 92,
        user_id: 45,
        platform_id: 1
      },
      {
        id: 93,
        user_id: 62,
        platform_id: 3
      },
      {
        id: 94,
        user_id: 49,
        platform_id: 3
      },
      {
        id: 95,
        user_id: 63,
        platform_id: 3
      },
      {
        id: 96,
        user_id: 35,
        platform_id: 1
      },
      {
        id: 97,
        user_id: 59,
        platform_id: 3
      },
      {
        id: 98,
        user_id: 1,
        platform_id: 1
      },
      {
        id: 99,
        user_id: 4,
        platform_id: 1
      },
      {
        id: 100,
        user_id: 55,
        platform_id: 1
      },
      {
        id: 101,
        user_id: 78,
        platform_id: 1
      },
      {
        id: 102,
        user_id: 25,
        platform_id: 2
      },
      {
        id: 103,
        user_id: 64,
        platform_id: 3
      },
      {
        id: 104,
        user_id: 9,
        platform_id: 1
      },
      {
        id: 105,
        user_id: 79,
        platform_id: 3
      },
      {
        id: 106,
        user_id: 57,
        platform_id: 2
      },
      {
        id: 107,
        user_id: 16,
        platform_id: 1
      },
      {
        id: 108,
        user_id: 83,
        platform_id: 2
      },
      {
        id: 109,
        user_id: 87,
        platform_id: 3
      },
      {
        id: 110,
        user_id: 30,
        platform_id: 3
      },
      {
        id: 111,
        user_id: 24,
        platform_id: 2
      },
      {
        id: 112,
        user_id: 31,
        platform_id: 3
      },
      {
        id: 113,
        user_id: 21,
        platform_id: 1
      },
      {
        id: 114,
        user_id: 79,
        platform_id: 3
      },
      {
        id: 115,
        user_id: 85,
        platform_id: 2
      },
      {
        id: 116,
        user_id: 89,
        platform_id: 2
      },
      {
        id: 117,
        user_id: 15,
        platform_id: 2
      },
      {
        id: 118,
        user_id: 49,
        platform_id: 2
      },
      {
        id: 119,
        user_id: 49,
        platform_id: 1
      },
      {
        id: 120,
        user_id: 53,
        platform_id: 2
      },
      {
        id: 121,
        user_id: 48,
        platform_id: 2
      },
      {
        id: 122,
        user_id: 46,
        platform_id: 3
      },
      {
        id: 123,
        user_id: 84,
        platform_id: 3
      },
      {
        id: 124,
        user_id: 10,
        platform_id: 1
      },
      {
        id: 125,
        user_id: 93,
        platform_id: 1
      },
      {
        id: 126,
        user_id: 49,
        platform_id: 1
      },
      {
        id: 127,
        user_id: 68,
        platform_id: 2
      },
      {
        id: 128,
        user_id: 95,
        platform_id: 2
      },
      {
        id: 129,
        user_id: 86,
        platform_id: 1
      },
      {
        id: 130,
        user_id: 28,
        platform_id: 2
      },
      {
        id: 131,
        user_id: 93,
        platform_id: 3
      },
      {
        id: 132,
        user_id: 37,
        platform_id: 2
      },
      {
        id: 133,
        user_id: 5,
        platform_id: 3
      },
      {
        id: 134,
        user_id: 11,
        platform_id: 2
      },
      {
        id: 135,
        user_id: 27,
        platform_id: 2
      },
      {
        id: 136,
        user_id: 73,
        platform_id: 2
      },
      {
        id: 137,
        user_id: 12,
        platform_id: 2
      },
      {
        id: 138,
        user_id: 17,
        platform_id: 3
      },
      {
        id: 139,
        user_id: 45,
        platform_id: 1
      },
      {
        id: 140,
        user_id: 93,
        platform_id: 1
      },
      {
        id: 141,
        user_id: 82,
        platform_id: 1
      },
      {
        id: 142,
        user_id: 67,
        platform_id: 1
      },
      {
        id: 143,
        user_id: 34,
        platform_id: 1
      },
      {
        id: 144,
        user_id: 80,
        platform_id: 1
      },
      {
        id: 145,
        user_id: 79,
        platform_id: 2
      },
      {
        id: 146,
        user_id: 89,
        platform_id: 3
      },
      {
        id: 147,
        user_id: 93,
        platform_id: 2
      },
      {
        id: 148,
        user_id: 94,
        platform_id: 3
      },
      {
        id: 149,
        user_id: 56,
        platform_id: 3
      },
      {
        id: 150,
        user_id: 68,
        platform_id: 2
      },
      {
        id: 151,
        user_id: 85,
        platform_id: 2
      },
      {
        id: 152,
        user_id: 31,
        platform_id: 3
      },
      {
        id: 153,
        user_id: 66,
        platform_id: 3
      },
      {
        id: 154,
        user_id: 78,
        platform_id: 2
      },
      {
        id: 155,
        user_id: 72,
        platform_id: 1
      },
      {
        id: 156,
        user_id: 9,
        platform_id: 1
      },
      {
        id: 157,
        user_id: 71,
        platform_id: 3
      },
      {
        id: 158,
        user_id: 25,
        platform_id: 1
      },
      {
        id: 159,
        user_id: 80,
        platform_id: 2
      },
      {
        id: 160,
        user_id: 22,
        platform_id: 3
      },
      {
        id: 161,
        user_id: 2,
        platform_id: 2
      },
      {
        id: 162,
        user_id: 100,
        platform_id: 3
      },
      {
        id: 163,
        user_id: 67,
        platform_id: 2
      },
      {
        id: 164,
        user_id: 21,
        platform_id: 2
      },
      {
        id: 165,
        user_id: 56,
        platform_id: 2
      },
      {
        id: 166,
        user_id: 55,
        platform_id: 2
      },
      {
        id: 167,
        user_id: 28,
        platform_id: 1
      },
      {
        id: 168,
        user_id: 27,
        platform_id: 3
      },
      {
        id: 169,
        user_id: 86,
        platform_id: 3
      },
      {
        id: 170,
        user_id: 39,
        platform_id: 2
      },
      {
        id: 171,
        user_id: 32,
        platform_id: 2
      },
      {
        id: 172,
        user_id: 53,
        platform_id: 1
      },
      {
        id: 173,
        user_id: 46,
        platform_id: 1
      },
      {
        id: 174,
        user_id: 48,
        platform_id: 2
      },
      {
        id: 175,
        user_id: 49,
        platform_id: 1
      },
      {
        id: 176,
        user_id: 75,
        platform_id: 3
      },
      {
        id: 177,
        user_id: 23,
        platform_id: 2
      },
      {
        id: 178,
        user_id: 93,
        platform_id: 1
      },
      {
        id: 179,
        user_id: 80,
        platform_id: 1
      },
      {
        id: 180,
        user_id: 20,
        platform_id: 1
      },
      {
        id: 181,
        user_id: 69,
        platform_id: 3
      },
      {
        id: 182,
        user_id: 95,
        platform_id: 2
      },
      {
        id: 183,
        user_id: 92,
        platform_id: 3
      },
      {
        id: 184,
        user_id: 11,
        platform_id: 1
      },
      {
        id: 185,
        user_id: 89,
        platform_id: 3
      },
      {
        id: 186,
        user_id: 49,
        platform_id: 3
      },
      {
        id: 187,
        user_id: 2,
        platform_id: 3
      },
      {
        id: 188,
        user_id: 83,
        platform_id: 2
      },
      {
        id: 189,
        user_id: 68,
        platform_id: 1
      },
      {
        id: 190,
        user_id: 2,
        platform_id: 3
      },
      {
        id: 191,
        user_id: 19,
        platform_id: 3
      },
      {
        id: 192,
        user_id: 100,
        platform_id: 1
      },
      {
        id: 193,
        user_id: 13,
        platform_id: 2
      },
      {
        id: 194,
        user_id: 20,
        platform_id: 3
      },
      {
        id: 195,
        user_id: 6,
        platform_id: 1
      },
      {
        id: 196,
        user_id: 59,
        platform_id: 1
      },
      {
        id: 197,
        user_id: 18,
        platform_id: 2
      },
      {
        id: 198,
        user_id: 96,
        platform_id: 3
      },
      {
        id: 199,
        user_id: 99,
        platform_id: 1
      },
      {
        id: 200,
        user_id: 87,
        platform_id: 1
      },
      {
        id: 201,
        user_id: 29,
        platform_id: 1
      },
      {
        id: 202,
        user_id: 61,
        platform_id: 2
      },
      {
        id: 203,
        user_id: 36,
        platform_id: 2
      },
      {
        id: 204,
        user_id: 80,
        platform_id: 1
      },
      {
        id: 205,
        user_id: 92,
        platform_id: 2
      },
      {
        id: 206,
        user_id: 2,
        platform_id: 1
      },
      {
        id: 207,
        user_id: 64,
        platform_id: 1
      },
      {
        id: 208,
        user_id: 5,
        platform_id: 3
      },
      {
        id: 209,
        user_id: 30,
        platform_id: 1
      },
      {
        id: 210,
        user_id: 12,
        platform_id: 2
      },
      {
        id: 211,
        user_id: 24,
        platform_id: 1
      },
      {
        id: 212,
        user_id: 46,
        platform_id: 1
      },
      {
        id: 213,
        user_id: 76,
        platform_id: 3
      },
      {
        id: 214,
        user_id: 25,
        platform_id: 1
      },
      {
        id: 215,
        user_id: 14,
        platform_id: 2
      },
      {
        id: 216,
        user_id: 1,
        platform_id: 2
      },
      {
        id: 217,
        user_id: 53,
        platform_id: 3
      },
      {
        id: 218,
        user_id: 26,
        platform_id: 2
      },
      {
        id: 219,
        user_id: 96,
        platform_id: 2
      },
      {
        id: 220,
        user_id: 5,
        platform_id: 3
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    throw new Error('Subcription seeder can not be rolled back.')
  }
};