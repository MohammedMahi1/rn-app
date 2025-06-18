PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_fri_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`task` text,
	`isChecked` integer DEFAULT false
);
--> statement-breakpoint
INSERT INTO `__new_fri_table`("id", "task", "isChecked") SELECT "id", "task", "isChecked" FROM `fri_table`;--> statement-breakpoint
DROP TABLE `fri_table`;--> statement-breakpoint
ALTER TABLE `__new_fri_table` RENAME TO `fri_table`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_mon_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`task` text,
	`isChecked` integer DEFAULT false
);
--> statement-breakpoint
INSERT INTO `__new_mon_table`("id", "task", "isChecked") SELECT "id", "task", "isChecked" FROM `mon_table`;--> statement-breakpoint
DROP TABLE `mon_table`;--> statement-breakpoint
ALTER TABLE `__new_mon_table` RENAME TO `mon_table`;--> statement-breakpoint
CREATE TABLE `__new_satur_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`task` text,
	`isChecked` integer DEFAULT false
);
--> statement-breakpoint
INSERT INTO `__new_satur_table`("id", "task", "isChecked") SELECT "id", "task", "isChecked" FROM `satur_table`;--> statement-breakpoint
DROP TABLE `satur_table`;--> statement-breakpoint
ALTER TABLE `__new_satur_table` RENAME TO `satur_table`;--> statement-breakpoint
CREATE TABLE `__new_sun_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`task` text,
	`isChecked` integer DEFAULT false
);
--> statement-breakpoint
INSERT INTO `__new_sun_table`("id", "task", "isChecked") SELECT "id", "task", "isChecked" FROM `sun_table`;--> statement-breakpoint
DROP TABLE `sun_table`;--> statement-breakpoint
ALTER TABLE `__new_sun_table` RENAME TO `sun_table`;--> statement-breakpoint
CREATE TABLE `__new_ther_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`task` text,
	`isChecked` integer DEFAULT false
);
--> statement-breakpoint
INSERT INTO `__new_ther_table`("id", "task", "isChecked") SELECT "id", "task", "isChecked" FROM `ther_table`;--> statement-breakpoint
DROP TABLE `ther_table`;--> statement-breakpoint
ALTER TABLE `__new_ther_table` RENAME TO `ther_table`;--> statement-breakpoint
CREATE TABLE `__new_tues_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`task` text,
	`isChecked` integer DEFAULT false
);
--> statement-breakpoint
INSERT INTO `__new_tues_table`("id", "task", "isChecked") SELECT "id", "task", "isChecked" FROM `tues_table`;--> statement-breakpoint
DROP TABLE `tues_table`;--> statement-breakpoint
ALTER TABLE `__new_tues_table` RENAME TO `tues_table`;--> statement-breakpoint
CREATE TABLE `__new_widn_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`task` text,
	`isChecked` integer DEFAULT false
);
--> statement-breakpoint
INSERT INTO `__new_widn_table`("id", "task", "isChecked") SELECT "id", "task", "isChecked" FROM `widn_table`;--> statement-breakpoint
DROP TABLE `widn_table`;--> statement-breakpoint
ALTER TABLE `__new_widn_table` RENAME TO `widn_table`;