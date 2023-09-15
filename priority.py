import sqlite3

class HospitalDatabase:
    def __init__(self, db_name):
        self.conn = sqlite3.connect(db_name)
        self.cursor = self.conn.cursor()

    def close(self):
        self.conn.close()

    def add_patient(self, name, esi, ward_id):
        self.cursor.execute("INSERT INTO patients (name, esi, ward_id) VALUES (?, ?, ?)", (name, esi, ward_id))
        self.conn.commit()

    def add_medical_staff(self, name, specialization):
        self.cursor.execute("INSERT INTO medical_staff (name, specialization) VALUES (?, ?)", (name, specialization))
        self.conn.commit()

    def add_ward(self, name, capacity):
        self.cursor.execute("INSERT INTO wards (name, capacity) VALUES (?, ?)", (name, capacity))
        self.conn.commit()

    def get_available_beds(self, ward_id):
        self.cursor.execute("SELECT capacity FROM wards WHERE id=?", (ward_id,))
        capacity = self.cursor.fetchone()
        if capacity:
            self.cursor.execute("SELECT COUNT(*) FROM patients WHERE ward_id=?", (ward_id,))
            occupied = self.cursor.fetchone()[0]
            return capacity[0] - occupied
        return 0

    def get_available_staff(self, specialization):
        self.cursor.execute("SELECT COUNT(*) FROM medical_staff WHERE specialization=?", (specialization,))
        return self.cursor.fetchone()[0]

def admit_patient(self, name, esi,num_wards,ward_specialization, specialization):
    best_ward_id = None
    best_ward_priority = float('inf')
    best_specialization = None

    for ward_id in range(1, num_wards + 1):
        available_beds = self.get_available_beds(ward_id)
        if available_beds > 0:
            ward_priority = available_beds

            if ward_specialization == specialization:
                ward_priority += 1  

            if ward_priority < best_ward_priority:
                best_ward_id = ward_id
                best_ward_priority = ward_priority
                best_specialization = ward_specialization

    if best_ward_id is not None:
        self.add_patient(name, esi, best_ward_id)
        print(f"Admitted patient {name} to ward {best_ward_id} with specialization {best_specialization}.")
    else:
        print("No available beds or staff. Patient not admitted.")


"""
    def admit_patient(self, name, esi, ward_id, specialization):
        available_beds = self.get_available_beds(ward_id)
        if available_beds > 0:
            self.add_patient(name, esi, ward_id)
        else:
            available_staff = self.get_available_staff(specialization)
            if available_staff > 0:
                self.add_patient(name, esi, ward_id)
            else:
                print("No available beds or staff. Patient not admitted.")
                """

# Usage example:
db = HospitalDatabase("hospital.db")

db.add_ward("Emergency Ward 1", capacity=5)
db.add_ward("Emergency Ward 2", capacity=3)
db.add_medical_staff("Doctor A", specialization="Cardiology")
db.add_medical_staff("Doctor B", specialization="Orthopedics")
db.add_patient("Patient 1", esi=2, ward_id=1)
db.add_patient("Patient 2", esi=3, ward_id=1)
db.admit_patient("New Patient", esi=1, specialization="Cardiology")
db.close()
