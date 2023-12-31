import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import uniqid from 'uniqid'

export const POST = async (req) => {
    const data = await req.formData();
    if (data.get('file')) {
        const file = data.get('file');

        const s3Client = new S3Client({
            region: 'eu-north-1',
            credentials: {
                accessKeyId: process.env.IMAGE_UPLOAD_ACCESS_KEY,
                secretAccessKey: process.env.IMAGE_UPLOAD_SECRET_KEY,
            }
        });

        const ext = file.name.split('.').slice(-1)[0];
        const newFileName = uniqid() + '.' + ext;

        const chunks = [];
        for await (const chunk of file.stream()) {
            chunks.push(chunk);
        }
        const buffer = Buffer.concat(chunks);

        const bucket = 'majid-oladepo-portfolio'
        await s3Client.send(new PutObjectCommand({
            Bucket: bucket,
            Key: newFileName,
            ACL: 'public-read',
            ContentType: file.type,
            Body: buffer
        }));

        const link = 'https://'+bucket+'.s3.amazonaws.com/'+newFileName
        return Response.json(link);
    }
    return Response.json(true);
}