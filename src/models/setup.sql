CREATE TABLE branch(
  branch_id SERIAL NOT NULL PRIMARY KEY,
  branch_name VARCHAR(24) NOT NULL,
  branch_phone VARCHAR(15) NOT NULL,
  branch_address VARCHAR(64) NOT NULL,
  branch_created_at DATE DEFAULT CURRENT_DATE
);
CREATE TABLE admins(
  admin_id SERIAL NOT NULL,
  username VARCHAR(24) NOT NULL,
  password VARCHAR(64) NOT NULL
);
CREATE TABLE rooms(
  room_id SERIAL NOT NULL PRIMARY KEY,
  room_name VARCHAR(16) NOT NULL,
  branch_id INT REFERENCES branch(branch_id)
);
CREATE TABLE teachers(
  teacher_id SERIAL NOT NULL PRIMARY KEY,
  teacher_full_name VARCHAR(24) NOT NULL,
  teacher_level VARCHAR(24) NOT NULL,
  teacher_avatar VARCHAR(64),
  teacher_full_info VARCHAR(128),
  teacher_created_at DATE DEFAULT CURRENT_DATE
);
CREATE TABLE courses(
  course_id SERIAL NOT NULL PRIMARY KEY,
  course_name VARCHAR(64) NOT NULL,
  course_price DECIMAL(12, 2) NOT NULL
);
CREATE TABLE groups(
  group_id SERIAL NOT NULL PRIMARY KEY,
  group_name VARCHAR(12) NOT NULL,
  group_date VARCHAR(64) NOT NULL,
  group_time VARCHAR(5) NOT NULL,
  -- 22:00
  teacher_id INT REFERENCES teachers(teacher_id),
  room_id INT REFERENCES rooms(room_id),
  course_id INT REFERENCES courses(course_id)
);
CREATE TABLE students(
  student_id SERIAL NOT NULL PRIMARY KEY,
  student_full_name VARCHAR(24) NOT NULL,
  student_age SMALLINT NOT NULL,
  student_phone VARCHAR(15),
  group_id INT REFERENCES groups(group_id)
);
CREATE TABLE attendances(
  attendance_id SERIAL NOT NULL PRIMARY KEY,
  attendance_date DATE DEFAULT CURRENT_DATE,
  attendance_status VARCHAR(12),
  student_id INT REFERENCES students(student_id),
  group_id INT REFERENCES groups(group_id)
);
CREATE TABLE payments(
  pay_id SERIAL NOT NULL,
  pay_status BOOLEAN DEFAULT FALSE NOT NULL,
  pay_price DECIMAL(16, 2) NOT NULL,
  pay_desc VARCHAR(64) NOT NULL,
  student_id INT REFERENCES students(student_id)
)