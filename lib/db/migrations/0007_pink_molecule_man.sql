CREATE TABLE "ContactUs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(64) NOT NULL,
	"full_name" varchar(64) NOT NULL,
	"phone" varchar(15) NOT NULL,
	"message" text NOT NULL,
	"createdAt" timestamp NOT NULL
);
