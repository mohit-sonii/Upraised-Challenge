-- CreateEnum
CREATE TYPE "GadgetSchema" AS ENUM ('Available', 'Deployed', 'Destroyed', 'DeCommissioned');

-- CreateTable
CREATE TABLE "Gadget" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" "GadgetSchema" NOT NULL,
    "deCommissionedTime" TIMESTAMP(3),

    CONSTRAINT "Gadget_pkey" PRIMARY KEY ("id")
);
