import "reflect-metadata"
import { DataSource, Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { join } from "path"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    uid: string

    @Column({ type: "varchar" })
    name: string
}

export const database = new DataSource({
    type: "sqlite",
    database: join(process.cwd(), "./database.db"),
    synchronize: true,
    entities: [User]
})