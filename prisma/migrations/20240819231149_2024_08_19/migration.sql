-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "price" VARCHAR(20) NOT NULL
);

-- CreateTable
CREATE TABLE "services" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "subtitle" VARCHAR(200),
    "description" TEXT NOT NULL,
    "image" VARCHAR(200) NOT NULL
);
