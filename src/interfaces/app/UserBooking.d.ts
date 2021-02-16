import { IBookingRate, IExperienceDetail } from ".";

export interface IUserBooking {
	id: string;
	experience: IExperienceDetail;
	ratings: IBookingRate[];
	reservations: [];
	usersGoing: string[];
	day: string;
	startTime: string;
	endTime: string;
	imageUrl: string;
	createdAt: string;
	completed: boolean;
}
