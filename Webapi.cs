// POST: api/insert-student
        public HttpResponseMessage Post(StudentDetail value)
        {
            try
            {
                ob.spInsertStudent(value.MODE, null, value.Name, value.MobileNo., value.Email, value.Course, null);
                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            catch (Exception)
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
        }