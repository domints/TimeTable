using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using TimeTable.Models;

namespace TimeTable.Migrations
{
    [DbContext(typeof(TTContext))]
    [Migration("20160705183638_Create-RT-to-User-Relation")]
    partial class CreateRTtoUserRelation
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rtm-21431");

            modelBuilder.Entity("TimeTable.Models.Booking", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid>("ResourceId");

                    b.Property<DateTime>("Start");

                    b.Property<DateTime>("Stop");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("ResourceId");

                    b.HasIndex("UserId");

                    b.ToTable("Bookings");
                });

            modelBuilder.Entity("TimeTable.Models.Resource", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<Guid>("ResourceTableId");

                    b.HasKey("Id");

                    b.HasIndex("ResourceTableId");

                    b.ToTable("Resources");
                });

            modelBuilder.Entity("TimeTable.Models.ResourceTable", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<int>("OwnerId");

                    b.HasKey("Id");

                    b.HasIndex("OwnerId");

                    b.ToTable("ResourceTables");
                });

            modelBuilder.Entity("TimeTable.Models.RtToUser", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<Guid>("ResourceTableId");

                    b.HasKey("UserId", "ResourceTableId");

                    b.HasIndex("ResourceTableId");

                    b.HasIndex("UserId");

                    b.ToTable("RtToUsers");
                });

            modelBuilder.Entity("TimeTable.Models.Session", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("SessionDeadLine");

                    b.Property<string>("Token");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Sessions");
                });

            modelBuilder.Entity("TimeTable.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Color");

                    b.Property<string>("Email");

                    b.Property<string>("FullName");

                    b.Property<string>("Password");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("TimeTable.Models.Booking", b =>
                {
                    b.HasOne("TimeTable.Models.Resource", "Resource")
                        .WithMany("Bookings")
                        .HasForeignKey("ResourceId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("TimeTable.Models.User", "User")
                        .WithMany("Bookings")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("TimeTable.Models.Resource", b =>
                {
                    b.HasOne("TimeTable.Models.ResourceTable", "ResourceTable")
                        .WithMany("Resources")
                        .HasForeignKey("ResourceTableId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("TimeTable.Models.ResourceTable", b =>
                {
                    b.HasOne("TimeTable.Models.User", "Owner")
                        .WithMany("OwnedTables")
                        .HasForeignKey("OwnerId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("TimeTable.Models.RtToUser", b =>
                {
                    b.HasOne("TimeTable.Models.ResourceTable", "ResourceTable")
                        .WithMany("AccessingUsers")
                        .HasForeignKey("ResourceTableId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("TimeTable.Models.User", "User")
                        .WithMany("AccessableTables")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("TimeTable.Models.Session", b =>
                {
                    b.HasOne("TimeTable.Models.User", "User")
                        .WithMany("Sessions")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
