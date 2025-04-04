import {createClient} from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({   
    apiVersion: "2025-03-25",
    dataset: "production",
    projectId: "ert6omr9",
    useCdn: false,
    
 })

 const builder = imageUrlBuilder(client)
 export function urlFor(source){
     return builder.image(source)
 }