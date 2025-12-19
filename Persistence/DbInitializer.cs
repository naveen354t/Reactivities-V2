using System;
using Domain;

namespace Persistence;

public class DbInitializer
{
 //seed method to populate the database
 public static async Task SeedData(AppDbContext context)
    {
        if (context.Activities.Any()) return; // DB has been seeded
        var activities =new List<Activity>
        {
            new() {
                Id = Guid.NewGuid().ToString(),
                Title = "Past Activity 1",
                Date = DateTime.Now.AddMonths(-2),
                Description = "Activity 2 months ago",
                Category = "drinks",
                City = "London",
                Venue = "Pub",
                Latitude = "51.5074 N",
                Longitude = "0.1278 W"
            },
            new() {
                Id = Guid.NewGuid().ToString(),
                Title = "Future Activity 1",
                Date = DateTime.Now.AddMonths(1),
                Description = "Activity 1 month in future",
                Category = "culture",
                City = "Paris",
                Venue = "Louvre",
                Latitude = "48.8566 N",
                Longitude = "2.3522 E"
            },
             new() {
                Id = Guid.NewGuid().ToString(),
                Title = "Future Activity 2",
                Date = DateTime.Now.AddMonths(2),
                Description = "Activity 2 months in future",
                Category = "music",
                City = "New York",
                Venue = "Madison Square Garden",
                Latitude = "40.7128 N",
                Longitude = "74.0060 W"
            },
             new() {
                Id = Guid.NewGuid().ToString(),
                Title = "Future Activity 3",
                Date = DateTime.Now.AddMonths(3),
                Description = "Activity 3 months in future",
                Category = "food",
                City = "Tokyo",
                Venue = "Sushi Bar",
                Latitude = "35.6895 N",
                Longitude = "139.6917 E"
            }
            // Add more activities as needed

        };
        context.Activities.AddRange(activities);
        await context.SaveChangesAsync();
    }
}
