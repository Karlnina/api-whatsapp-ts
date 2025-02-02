import { image as imageQr } from "qr-image";
import LeadExternal from "../../domain/lead-external.repository";
import { create, Whatsapp } from "venom-bot";
import { file } from "../../domain/media";

export class VenomTransporter implements LeadExternal {
  intance: Whatsapp | undefined;

  constructor() {
    create({ session: "session" }).then((client) => (this.intance = client));
  }
  sendMedia({ media, phone }: { media: file; phone: string; }): Promise<any> {
    throw new Error("Method not implemented.");
  }
  sendMsg(lead: { message: string; phone: string }): Promise<any> {
    try {
      const { message, phone } = lead;
      const response = this.intance?.sendText(`${phone}@c.us`, message);
      return Promise.resolve(response);
    } catch (error: any) {
      return Promise.reject(error);
    }
  }
}
