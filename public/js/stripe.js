/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async tourId => {
  try {
    //1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);
    //2) Create checkout form + charge credit card
    await window
      .Stripe(
        'pk_test_51OHOaqHfDUlC5cVjgEwhfkLAxxOcfn6ixHIS8lIqWwxFn1kSFH35S1ePn2pi8H16K51GJPOzN11eModO7Huxa7Oy00ONkCVOZp'
      )
      .redirectToCheckout({
        sessionId: session.data.session.id
      });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
