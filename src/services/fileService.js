import axiosInstance from './api';

const fileService = {
    uploadFile: async (file) => {
        const formData = new FormData();
        formData.append('file', file);

        return await axiosInstance.post('/services/uploadfile/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },
};

export default fileService;
