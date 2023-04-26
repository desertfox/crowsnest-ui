import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8080/api/",
});

const api = {
  GetStatus: async function () {
    try {
      const response = await client.get("/status");

      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  ReloadJobs: function () {
    client.post("/reload").then((response) => {
      console.log(response);
    });
  },
  GetJobs: async function () {
    try {
      const response = await client.get(`/jobs`);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  GetJob: async function (jobId) {
    try {
      const response = await client.get(`/job/${jobId}`);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  UpdateJob: async function (job) {
    try {
      const response = await client.post(
        job.hasId ? `/job/${job.id}` : "/job",
        job
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default api;
