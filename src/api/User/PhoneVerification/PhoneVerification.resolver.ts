import Verification from "../../../entities/Verification";
import {
  PhoneVerificationMutationArgs,
  PhoneVerificationResponse
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    PhoneVerification: async (
      _,
      args: PhoneVerificationMutationArgs
    ): Promise<PhoneVerificationResponse> => {
      const { phoneNumber } = args;
      try {
        const existingVerification = await Verification.findOne({
          payload: phoneNumber
        });
        if (existingVerification) {
          existingVerification.remove();
        }
        const newVerification = await Verification.create({
          payload: phoneNumber,
          target: "PHONE"
        }).save();
        // to do: send sms
      } catch (error) {
        return {
          ok: false,
          error: error.message
        };
      }
    }
  }
};

export default resolvers;
