using System;
using Application.Activities.Commands;
using Application.Activities.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ActivitiesController : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {

        return await Mediator.Send(new GetActivityList.Query());
    }
    //Get activity by id
    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivityDetails(string id)
    {
        return await Mediator.Send(new GetActivityDetails.Query { Id = id });
    }
    //Create a new activity
    [HttpPost]
    public async Task<ActionResult<String>> CreateActivity(Activity activity)
    {
        return await Mediator.Send(new CreateActivity.Command { Activity = activity });

    }
    //Edit an activity
    [HttpPut("{id}")]
    public async Task<IActionResult> EditActivity(string id, Activity activity)
    {
        activity.Id = id;
        await Mediator.Send(new EditActivity.Command { Activity = activity });
        return NoContent();
    }
    //Delete an activity
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteActivity(string id)
    {
        await Mediator.Send(new DeleteActivity.Command { Id = id });
        return Ok();
    }
}