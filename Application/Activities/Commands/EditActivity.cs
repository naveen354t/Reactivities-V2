using System;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public class EditActivity
{
    public class Command : IRequest
    {
        public required Activity Activity { get; set; } = null!;
    }
    public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command>
    {
        public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
        {
            var activity = await context.Activities.FindAsync([request.Activity.Id], cancellationToken) ?? throw new Exception("Activity not found");
            mapper.Map(request.Activity, activity);

            await context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }

        Task IRequestHandler<Command>.Handle(Command request, CancellationToken cancellationToken)
        {
            return Handle(request, cancellationToken);
        }
    }
}
