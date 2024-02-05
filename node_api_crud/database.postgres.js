import { randomUUID } from "crypto"
import { sql } from './db.js'

export class databasePostgres {

   async list(search){
     
        let videos
        if(search){
            videos = await sql`select * from videos where title ilike ${'%' + search + '%'}`

        }else{
            videos = await sql`select * from videos`
        }

        return videos
    }


    async create(video){

        const { title, description, duration } = video

        await sql`insert into videos ( title, description, duration) VALUES (${title}, ${description}, ${duration}) `
       
    }

    async update(id, video){
        
       
       
        const {title, description, duration } = video
        

        await sql`update videos set title = ${title}, description = ${description}, duration = ${duration} where id=${id} `

    }

    async delete(id, video){

       
        await sql`delete from videos where id = ${id}`
   
    }

    

}