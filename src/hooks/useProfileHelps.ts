import axios from 'axios';

// from app
import { API_ENDPOINT, Icon_Category_Cooking, Icon_Category_Music, API_CONFIG } from '../constants';
import { IApiSuccess } from '../interfaces/api';
import { IProfileHelp } from '../interfaces/app';

export const useProfileHelps = () => {

  const profileHelps = async (
  ): Promise<any> => {
    var url = API_ENDPOINT.PROFILE_HELP;

    try {
      /*
      const { data } = await axios.get<IApiSuccess>(url, API_CONFIG);
      const result: IExperienceCategory[] = data.data;
      */

      // test
      var result: IProfileHelp[] = [];
      result.push({ id: 1, image: '', title: 'Surf Lessons with Kelly Slater' });
      result.push({ id: 2, image: '', title: 'Surf Lessons with Music' });
      result.push({ id: 3, image: '', title: 'Surf Lessons with Sports'});
      result.push({ id: 4, image: '', title: 'Surf Lessons with Guitar'});

      return Promise.resolve(result);
    } catch (err) {
      return Promise.reject(null);
    }
  };

  return { profileHelps };
};
