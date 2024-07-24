import { useQuery } from "@tanstack/react-query"
import { newRequest } from "../utils/newRequest"

//getting all jobs
export const useJobs = (type) => {
    return(
        useQuery({
            queryKey: ["jobs",type],
            queryFn: async () => {
              try {
                const response = await newRequest.get(type ? `/jobs?type=${type}`:
                  '/jobs'
                )
                return response.data
              } catch (error) {
                console.log(error);
              }
            },
        })
    )
}

//getting single job info
export const useJob = (id) => {
    return(
        useQuery({
            queryKey: ["job",id],
            queryFn: async () => {
              try {
                const response = await newRequest.get(
                  `/jobs/${id}`
                )
                return response.data
              } catch (error) {
                console.log(error);
              }
            },
        })
    )
}

