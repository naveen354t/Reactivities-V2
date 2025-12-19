using System;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class ActivitiesController(AppDbContext context):BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {
        var activities = await context.Activities.ToListAsync();
        return Ok(activities);
    }
    //Get activity by id
    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivityDetails(string id)    
    {
        var activity = await context.Activities.FindAsync(id);
        if (activity == null) return NotFound();
        return Ok(activity);
    }
    //Create a new activity
    [HttpPost]
    public async Task<ActionResult> CreateActivity(Activity activity)
    {
        await context.Activities.AddAsync(activity);
        await context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetActivityDetails), new { id = activity.Id }, activity);
    }
}