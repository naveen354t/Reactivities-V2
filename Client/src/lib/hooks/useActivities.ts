import { useMutation, useQuery,QueryClient} from "@tanstack/react-query";                        
import agent from "../types/api/agent";

export const useActivities = (id?: string) => {
    const queryClient = new QueryClient();

    const { data: activitiesData, isLoading } = useQuery<Activity[]>(({
        queryKey: ['activities'],
        queryFn: async () => {
            const response = await agent.get<Activity[]>('activities');
            return response.data;
        }   
    }));
    const {data: activityData, isLoading: isActivityLoading} = useQuery<Activity>({
        queryKey: ['activities', id],
        queryFn: async () => {
            const response = await agent.get<Activity>(`activities/${id}`);
            return response.data;
        },
        enabled: !!id
    });

    const updateActivity = useMutation({
        mutationFn: async (activity: Activity) => {
            await agent.put<void>(`activities/${activity.id}`, activity);
        },
        onSuccess:async () => {
            await queryClient.invalidateQueries({ queryKey: ['activities'] });
        }
    });
    // You can add more mutations like createActivity, deleteActivity similarly
    const createActivity = useMutation({
        mutationFn: async (activity: Activity) => {
          const response = await agent.post<void>('activities', activity); 
          return response.data;
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['activities'] });
        }
    });
    const deleteActivity = useMutation({
        mutationFn: async (id: string) => {
            await agent.delete<void>(`activities/${id}`);   
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['activities'] });
        }
    });

    return {
        activities: activitiesData,
        isPending: isLoading,
        updateActivity,
        createActivity,
        deleteActivity,
        activity: activityData,
        isActivityLoading
    };
}