using System;
using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public class DeleteActivity
{
    public class Command : IRequest
    {
        public required string Id { get; set; }
    }
    public class Handler(AppDbContext context) : IRequestHandler<Command>
    {
        public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
        {
            var activity = await context.Activities.FindAsync([request.Id], cancellationToken) ?? throw new Exception("Activity not found");
            context.Activities.Remove(activity);
            await context.SaveChangesAsync(cancellationToken);
            return Unit.Value;
        }

        Task IRequestHandler<Command>.Handle(Command request, CancellationToken cancellationToken)
        {
            return Handle(request, cancellationToken);
        }
    }
}
