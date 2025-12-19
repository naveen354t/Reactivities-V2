using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence;

public class AppDbContext(DbContextOptions options) : DbContext(options)
{
   
    // DbSet for Activities
    public DbSet<Activity> Activities { get; set; }   

}
