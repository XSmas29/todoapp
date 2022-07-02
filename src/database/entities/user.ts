import { Field, ObjectType } from "type-graphql";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@ObjectType()
class User extends BaseEntity{
    
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column("varchar")
    first_name!: string;

    @Field()
    @Column("varchar")
    last_name!: string;

    @Field()
    @CreateDateColumn()
    created_at!: Date;

    @Field()
    @UpdateDateColumn()
    updated_at!: Date;

    @Field()
    @DeleteDateColumn()
    deleted_at!: Date;
}