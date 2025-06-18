DROP TABLE `fri_table`;--> statement-breakpoint
DROP TABLE `satur_table`;--> statement-breakpoint
DROP TABLE `sun_table`;--> statement-breakpoint
DROP TABLE `ther_table`;--> statement-breakpoint
DROP TABLE `tues_table`;--> statement-breakpoint
DROP TABLE `widn_table`;--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_mon_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`task` text NOT NULL,
	`isChecked` integer DEFAULT false NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_mon_table`("id", "task", "isChecked") SELECT "id", "task", "isChecked" FROM `mon_table`;--> statement-breakpoint
DROP TABLE `mon_table`;--> statement-breakpoint
ALTER TABLE `__new_mon_table` RENAME TO `mon_table`;--> statement-breakpoint
PRAGMA foreign_keys=ON;