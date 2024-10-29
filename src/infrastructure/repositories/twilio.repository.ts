import "dotenv/config";
import { Twilio } from "twilio";
import LeadExternal from "../../domain/lead-external.repository";
import { file } from "../../domain/media";

const accountSid = process.env.TWILIO_SID || "";
const authToken = process.env.TWILIO_TOKEN || "";
const fromNumber = process.env.TWILIO_FROM || "";

export default class TwilioService extends Twilio implements LeadExternal {
  constructor() {
    super(accountSid, authToken);
  }
  sendMedia({ media, phone }: { media: file; phone: string; }): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async sendMsg({
    message,
    phone,
  }: {
    message: string;
    phone: string;
  }): Promise<any> {
    try {
      const parsePhone = `+${phone}`
      const mapMsg = { body: message, to: parsePhone, from: fromNumber };
      const response = await this.messages.create(mapMsg);
      return response
    } catch (e) {
      console.log(e)
      return Promise.reject(e)
    }
  }
}

