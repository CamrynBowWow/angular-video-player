import { Client, Account } from 'appwrite';
import { environment } from 'src/environments/environment';

const client = new Client();
client
  .setEndpoint(environment.appwriteApiEndpoint)
  .setProject(environment.appwriteProjectId);

export const account = new Account(client);
export { ID } from 'appwrite';
