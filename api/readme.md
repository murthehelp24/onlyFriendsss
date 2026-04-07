# 🚀 Event Matcher API Documentation

ระบบ Backend สำหรับแอปพลิเคชันนัดทำกิจกรรมและโซเชียลเน็ตเวิร์ก พัฒนาด้วย **Node.js**, **Prisma ORM** และ **PostgreSQL**

---

## 🛠 Database Schema (Prisma)

ระบบประกอบด้วย Entity หลักดังนี้:
- **User**: จัดเก็บข้อมูลผู้ใช้งานและโปรไฟล์
- **Activity**: กิจกรรมที่สร้างขึ้นโดย Host
- **JoinRequest**: ระบบขอเข้าร่วมกิจกรรม (Pending, Approved, Rejected)
- **FriendShip**: ระบบความสัมพันธ์เพื่อน (Sender, Receiver)
- **ChatGroup & Message**: ระบบแชทแยกตามรายกิจกรรม
- **Place & VisitedPlace**: ข้อมูลสถานที่และการบันทึกประวัติการไป

---

## 🛰 API Endpoints Reference

### 🔐 Authentication & User

| Method | Endpoint | Description | Auth |
|:--- |:--- |:--- |:---:|
| `POST` | `/api/auth/register` | สมัครสมาชิกใหม่ | ❌ |
| `POST` | `/api/auth/login` | เข้าสู่ระบบเพื่อรับ Token | ❌ |
| `GET` | `/api/users/me` | ดูข้อมูลโปรไฟล์ตัวเอง | ✅ |
| `PATCH` | `/api/users/me` | แก้ไขโปรไฟล์ (Bio, Image) | ✅ |
| `GET` | `/api/users/:id` | ดูโปรไฟล์ผู้ใช้อื่นๆ | ✅ |

### 📅 Activities (กิจกรรม)

| Method | Endpoint | Description | Auth |
|:--- |:--- |:--- |:---:|
| `GET` | `/api/activities` | ดึงรายการกิจกรรมทั้งหมด (Filter: category, status) | ✅ |
| `POST` | `/api/activities` | สร้างกิจกรรมใหม่ (ผู้สร้างจะเป็น Host) | ✅ |
| `GET` | `/api/activities/:id` | ดูรายละเอียดกิจกรรมและรายชื่อสมาชิก | ✅ |
| `PATCH` | `/api/activities/:id` | แก้ไขข้อมูลกิจกรรม (เฉพาะ Host) | ✅ |
| `DELETE` | `/api/activities/:id` | ยกเลิกกิจกรรม (เฉพาะ Host) | ✅ |

### 🙋‍♂️ Join Requests (การขอเข้าร่วม)

| Method | Endpoint | Description | Auth |
|:--- |:--- |:--- |:---:|
| `POST` | `/api/activities/:id/join` | ส่งคำขอเข้าร่วมกิจกรรม | ✅ |
| `GET` | `/api/activities/:id/requests` | ดูรายการคนขอจอยทั้งหมด (เฉพาะ Host) | ✅ |
| `PATCH` | `/api/requests/:id` | ตอบรับ (Approved) หรือปฏิเสธ (Rejected) | ✅ |

### 👥 Friendship (ระบบเพื่อน)

| Method | Endpoint | Description | Auth |
|:--- |:--- |:--- |:---:|
| `GET` | `/api/friends` | ดึงรายชื่อเพื่อนทั้งหมด (Accepted) | ✅ |
| `POST` | `/api/friends/request/:uid` | ส่งคำขอเป็นเพื่อนไปยัง User ID นั้นๆ | ✅ |
| `GET` | `/api/friends/pending` | ดูคำขอเพื่อนที่รอเรายืนยัน | ✅ |
| `PATCH` | `/api/friends/:id` | ยอมรับหรือปฏิเสธคำขอเพื่อน | ✅ |

### 💬 Chat System (ระบบแชท)

| Method | Endpoint | Description | Auth |
|:--- |:--- |:--- |:---:|
| `GET` | `/api/chat/:activityId` | ดึงข้อความย้อนหลังในกิจกรรม (เฉพาะสมาชิก) | ✅ |
| `POST` | `/api/chat/:activityId` | ส่งข้อความใหม่เข้ากลุ่มกิจกรรม | ✅ |

### 📍 Places & Reviews (สถานที่และรีวิว)

| Method | Endpoint | Description | Auth |
|:--- |:--- |:--- |:---:|
| `GET` | `/api/places` | ดึงรายการสถานที่ทั้งหมด | ✅ |
| `POST` | `/api/reviews` | เขียนรีวิวกิจกรรม (หลังกิจกรรมจบ) | ✅ |
| `GET` | `/api/users/:id/history` | ดูประวัติสถานที่ที่ผู้ใช้เคยไป (VisitedPlace) | ✅ |

---

## 📦 Data Models (Enums)

- **ActivityCategory**: `HEALTH`, `ENTERTAINMENT`, `ART`, `FOOD`, `TRAVEL`
- **ActivityStatus**: `OPEN`, `FULL`, `FINISHED`, `CANCELLED`
- **RequestStatus**: `PENDING`, `APPROVED`, `REJECTED`, `CANCELLED`
- **FriendshipStatus**: `PENDING`, `ACCEPTED`

---

## 🚀 Getting Started

1. ติดตั้ง Dependencies: `npm install`
2. ตั้งค่าไฟล์ `.env` (DATABASE_URL)
3. Run Migration: `npx prisma migrate dev`
4. Start Server: `npm run dev`
