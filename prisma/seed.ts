import { PrismaClient } from '@prisma/client'
import { fakerKO as faker } from '@faker-js/faker'
import { CATEGORY } from '@/constants'

const prisma = new PrismaClient()

async function seedUsers() {
  for (let i = 0; i < 10; i++) {
    const userData = {
      email: faker.internet.email(),
      name: faker.person.fullName(),
      image: faker.image.avatar(),
      desc: faker.lorem.paragraph(),
    }

    const res = await prisma.user.create({
      data: userData,
    })

    console.log(res)
  }
}

async function seedRooms() {
  const prisma = new PrismaClient()

  const totalUsers = await prisma.user.findMany()

  if (totalUsers?.length > 1) {
    for (let i = 0; i < 20; i++) {
      const randomUserIndex = Math.floor(Math.random() * totalUsers.length)
      const randomUser = totalUsers[randomUserIndex]

      const roomData = {
        title: faker.lorem.words(),
        images: [
          faker.image.urlLoremFlickr({
            category: 'hotel',
            width: 500,
            height: 500,
          }),
          faker.image.urlLoremFlickr({
            category: 'travel',
            width: 500,
            height: 500,
          }),
          faker.image.urlLoremFlickr({
            category: 'nature',
            width: 500,
            height: 500,
          }),
          faker.image.urlLoremFlickr({
            category: 'building',
            width: 500,
            height: 500,
          }),
        ],
        lat: getRandomLatitude(),
        lng: getRandomLongitude(),
        address:
          faker.location.state() +
          faker.location.street() +
          faker.location.streetAddress({ useFullAddress: true }),
        desc: faker.lorem.paragraph(),
        category: CATEGORY[Math.floor(Math.random() * CATEGORY.length)],
        bedroomDesc: faker.lorem.words(),
        price: parseInt(
          faker.commerce.price({
            min: 50000,
            max: 500000,
            dec: 0,
          }),
        ),
        freeCancel: faker.datatype.boolean(),
        selfCheckIn: faker.datatype.boolean(),
        officeSpace: faker.datatype.boolean(),
        hasMountainView: faker.datatype.boolean(),
        hasShampoo: faker.datatype.boolean(),
        hasFreeLaundry: faker.datatype.boolean(),
        hasAirConditioner: faker.datatype.boolean(),
        hasWifi: faker.datatype.boolean(),
        hasBarbeque: faker.datatype.boolean(),
        hasFreeParking: faker.datatype.boolean(),
        userId: randomUser.id,
      }

      const res = await prisma.room.create({
        data: roomData,
      })

      console.log(res)
    }
  }

  await prisma.$disconnect()
}

// 서울 위도/경도값 랜덤 생성 함수
function getRandomLatitude() {
  const minLatitude = 37.4316
  const maxLatitude = 37.701

  return faker.number
    .float({
      min: minLatitude,
      max: maxLatitude,
      //   precision: 0.000001,
      fractionDigits: 6, // 소수점 6자리
    })
    ?.toString()
}

function getRandomLongitude() {
  const minLongitude = 126.7963
  const maxLongitude = 127.1839

  return faker.number
    .float({
      min: minLongitude,
      max: maxLongitude,
      fractionDigits: 6, // 소수점 6자리
    })
    .toString()
}

async function main() {
  //   await seedUsers()
  await seedRooms()
}

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
