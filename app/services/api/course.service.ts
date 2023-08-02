import axios, { AxiosResponse } from "axios";
import config from "../config";

export interface Course {
  id?: number;
  courseName: string;
  courseDescription: string;
  courseDuration: string;
  learningOutcome: string;
}

const API_URL: string = config.API_BASE_URL;

class CourseService {
  static client = axios.create({
    baseURL: API_URL,
  });

  async registerSchool(course: Course): Promise<AxiosResponse<Course>> {
    const response = await CourseService.client.post<Course>(
      "/courses/create",
      course
    );
    return response;
  }

  async fetchAllCourses(): Promise<AxiosResponse<Course[]>> {
    const response = await CourseService.client.get<Course[]>("/courses/all");
    return response;
  }

  async fetchSchoolById(id: number): Promise<AxiosResponse<Course>> {
    const response = await CourseService.client.get<Course>(`/courses/${id}`);
    return response;
  }

  async updateCourse(
    course: Course,
    id: number
  ): Promise<AxiosResponse<Course>> {
    const response = await CourseService.client.put<Course>(
      `/courses/${id}`,
      course
    );
    return response;
  }

  async delCourseById(id: number): Promise<AxiosResponse<void>> {
    const response = await CourseService.client.delete<void>(`/courses/${id}`);
    return response;
  }
}

export default new CourseService();
