import { useMutation, useQuery,QueryClient} from "@tanstack/react-query";                        
import agent from "../types/api/agent";

export const useActivities = () => {
    const queryClient = new QueryClient();

    const { data: activitiesData, isLoading, refetch } = useQuery<Activity[]>(({
        queryKey: ['activities'],
        queryFn: async () => {
            const response = await agent.get<Activity[]>('activities');
            return response.data;
        }   
    }));

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
            await agent.post<void>('activities', activity); 
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
        isLoading,
        refetchActivities: refetch,
        updateActivity,
        createActivity,
        deleteActivity
    };
}