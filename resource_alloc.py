from flask import Flask, request, jsonify
import heapq  # Using heapq for a min-heap

app = Flask(__name__)

# Initialize resources, staff availability, and patient queues
resources_available = {
    'doctors': [],
    'nurses': [],
    'x-ray': [],
    'pathology': [],
    # Add more resource types as needed
}

# Define a Patient class to store patient information
class Patient:
    def __init__(self, id, esi, tasks):
        self.id = id
        self.esi = esi
        self.tasks = tasks
        self.assigned_resources = {}  # To store the assigned resources

    # Make patients comparable based on their negative ESI values
    def __lt__(self, other):
        return self.esi > other.esi

# Define a Task class to store task information
class Task:
    def __init__(self, id, duration, predecessors, resource_type):
        self.id = id
        self.duration = duration
        self.predecessors = predecessors
        self.resource_type = resource_type  # Resource type required for the task

# Create a min-heap for patients
patient_queue = []

# API route to schedule patients
@app.route('/schedule_patients', methods=['POST'])
def schedule_patients_api():
    # Parse the JSON data sent from the frontend
    data = request.get_json()

    # Create and enqueue patients from the frontend data
    for patient_data in data['patients']:
        patient = Patient(**patient_data)
        heapq.heappush(patient_queue, patient)

    # Run the scheduling algorithm
    schedule_patients()

    # Prepare a response to send back to the frontend
    response_data = {'message': 'Scheduling complete'}

    return jsonify(response_data)

def find_available_resource(patient, resource_type):
    # Find an available resource of the appropriate type for the patient
    # You may need a more complex logic to select the right resource based on patient needs
    resource_list = resources_available[resource_type]
    if resource_list:
        return resource_list.pop(0)
    return None

def assign_resources(patient, task):
    # Assign resources (e.g., doctors, nurses) to the patient for the task
    resource_type = task.resource_type
    resource = find_available_resource(patient, resource_type)
    if resource:
        patient.assigned_resources[resource_type] = resource
        return True
    return False

def schedule_task(patient, task):
    # Simulate scheduling of treatment tasks
    # You may need to implement a more sophisticated scheduling algorithm
    # Consider precedence constraints between tasks
    if assign_resources(patient, task):
        # Start task if resources are available
        print(f"Patient {patient.id} (Task {task.id}) started {task.resource_type} task.")
        # Simulate task duration (you may replace this with real time)
        import time
        time.sleep(task.duration)
        print(f"Patient {patient.id} (Task {task.id}) completed {task.resource_type} task.")
        # Release resources after task completion
        release_resources(patient, task.resource_type)
    else:
        print(f"Patient {patient.id} (Task {task.id}) is waiting for {task.resource_type} resources.")

def release_resources(patient, resource_type):
    # Release the assigned resources after task completion
    resource_list = resources_available[resource_type]
    resource_list.append(patient.assigned_resources[resource_type])
    del patient.assigned_resources[resource_type]

# Scheduling algorithm
def schedule_patients():
    while patient_queue:
        patient = heapq.heappop(patient_queue)

        # Schedule tasks for the patient
        for task in patient.tasks:
            schedule_task(patient, task)

if __name__ == "__main__":
    app.run(debug=True)
