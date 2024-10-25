import numpy as np
from typing import List, Tuple, Dict
from dataclasses import dataclass
from datetime import datetime, timedelta
import random


@dataclass
class DeliveryPoint:
    id: str
    location_name: str  # Added for better identification
    latitude: float
    longitude: float
    time_window_start: datetime
    time_window_end: datetime
    service_time: int  # in minutes


@dataclass
class Route:
    driver_id: str
    delivery_sequence: List[str]
    total_distance: float
    total_time: int  # in minutes
    start_time: datetime


def calculate_distance(point1: Tuple[float, float], point2: Tuple[float, float]) -> float:
    """
    Calculate Euclidean distance between two points.
    For more accuracy in a production environment, you'd want to use
    actual road distances via a mapping API.
    """
    return np.sqrt((point1[0] - point2[0])**2 + (point1[1] - point2[1])**2) * 111  # Convert to approximate kilometers


def nearest_neighbor_algorithm(
    start_point: Tuple[float, float],
    delivery_points: Dict[str, DeliveryPoint],
    start_time: datetime
) -> Route:
    """
    Implement nearest neighbor algorithm with time windows consideration
    Adapted for Indian traffic conditions with variable travel times
    """
    unvisited = list(delivery_points.keys())
    current_point = start_point
    route = []
    total_distance = 0
    current_time = start_time

    while unvisited:
        nearest_distance = float('inf')
        nearest_point_id = None

        for point_id in unvisited:
            point = delivery_points[point_id]
            distance = calculate_distance(
                current_point,
                (point.latitude, point.longitude)
            )

            # Estimate travel time considering Indian traffic conditions
            # Assuming average speed of 20 km/h in urban areas
            # 3 minutes per km during peak hours
            travel_time = int(distance * 3)
            estimated_arrival = current_time + timedelta(minutes=travel_time)

            if estimated_arrival <= point.time_window_end and distance < nearest_distance:
                if estimated_arrival < point.time_window_start:
                    wait_time = (point.time_window_start -
                                 estimated_arrival).total_seconds() / 60
                else:
                    wait_time = 0

                nearest_distance = distance
                nearest_point_id = point_id

        if nearest_point_id is None:
            break

        route.append(nearest_point_id)
        point = delivery_points[nearest_point_id]
        total_distance += nearest_distance

        travel_time = int(nearest_distance * 3)  # 3 minutes per km
        current_time += timedelta(minutes=travel_time + point.service_time)
        unvisited.remove(nearest_point_id)

    return Route(
        driver_id=f"DRIVER_{random.randint(1000, 9999)}",
        delivery_sequence=route,
        total_distance=total_distance,
        total_time=int((current_time - start_time).total_seconds() / 60),
        start_time=start_time
    )


def create_bangalore_sample_data() -> Dict[str, DeliveryPoint]:
    """Create sample delivery points in Bangalore with realistic coordinates and time windows."""
    base_time = datetime(2024, 10, 25, 9, 0)  # Start at 9 AM

    return {
        "D1": DeliveryPoint(
            id="D1",
            location_name="Indiranagar",
            latitude=12.9718,
            longitude=77.6411,
            time_window_start=base_time + timedelta(minutes=0),
            time_window_end=base_time + timedelta(hours=2),
            service_time=15
        ),
        "D2": DeliveryPoint(
            id="D2",
            location_name="Koramangala",
            latitude=12.9349,
            longitude=77.6205,
            time_window_start=base_time + timedelta(minutes=30),
            time_window_end=base_time + timedelta(hours=3),
            service_time=20
        ),
        "D3": DeliveryPoint(
            id="D3",
            location_name="HSR Layout",
            latitude=12.9081,
            longitude=77.6476,
            time_window_start=base_time + timedelta(hours=1),
            time_window_end=base_time + timedelta(hours=4),
            service_time=10
        ),
        "D4": DeliveryPoint(
            id="D4",
            location_name="Whitefield",
            latitude=12.9698,
            longitude=77.7499,
            time_window_start=base_time + timedelta(hours=2),
            time_window_end=base_time + timedelta(hours=5),
            service_time=25
        ),
        "D5": DeliveryPoint(
            id="D5",
            location_name="Electronic City",
            latitude=12.8458,
            longitude=77.6692,
            time_window_start=base_time + timedelta(hours=1),
            time_window_end=base_time + timedelta(hours=4),
            service_time=20
        )
    }


# Test the implementation
if __name__ == "__main__":
    # Create sample data for Bangalore
    delivery_points = create_bangalore_sample_data()

    # Define depot location (starting point) - Assuming depot in Marathahalli
    depot = (12.9591, 77.7382)  # Marathahalli coordinates
    start_time = datetime(2024, 10, 25, 9, 0)  # Start at 9 AM

    # Generate route
    route = nearest_neighbor_algorithm(depot, delivery_points, start_time)

    # Print results
    print("\nOptimized Delivery Route in Bangalore:")
    print(f"Driver ID: {route.driver_id}")
    print(f"\nDelivery Sequence:")
    for stop_id in route.delivery_sequence:
        print(f"  → {delivery_points[stop_id].location_name} ({stop_id})")
    print(f"\nTotal Distance: {route.total_distance:.2f} km")
    print(f"Total Time: {route.total_time} minutes")
    print(f"Start Time: {route.start_time}")

    # Print detailed itinerary
    current_time = route.start_time
    current_location = depot

    print("\nDetailed Itinerary:")
    print(f"Starting Point: Marathahalli Depot")

    for stop_id in route.delivery_sequence:
        stop = delivery_points[stop_id]
        distance = calculate_distance(
            current_location,
            (stop.latitude, stop.longitude)
        )
        travel_time = int(distance * 3)  # 3 minutes per km
        arrival_time = current_time + timedelta(minutes=travel_time)

        print(f"\nStop: {stop.location_name} ({stop_id})")
        print(f"Distance from previous point: {distance:.2f} km")
        print(f"Estimated arrival time: {arrival_time.strftime('%I:%M %p')}")
        print(f"Service time: {stop.service_time} minutes")
        print(
            f"Time window: {stop.time_window_start.strftime('%I:%M %p')} - {stop.time_window_end.strftime('%I:%M %p')}")

        current_time = arrival_time + timedelta(minutes=stop.service_time)
        current_location = (stop.latitude, stop.longitude)
