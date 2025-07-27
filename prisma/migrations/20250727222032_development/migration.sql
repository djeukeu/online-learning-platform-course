/*
  Warnings:

  - You are about to drop the `enrollment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "enrollment" DROP CONSTRAINT "enrollment_course_id_fkey";

-- DropTable
DROP TABLE "enrollment";
