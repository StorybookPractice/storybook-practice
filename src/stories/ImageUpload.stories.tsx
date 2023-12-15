import { Box } from "@mui/material";
import ImageUploadButton from "../component/ImageUpload";

function ButtonWrapper() {
    return (
        <Box
            sx={{
                width: '300px',
            }}
        >
            <ImageUploadButton />
        </Box>
    )
}

export default {
    title: "Atoms/ImageUploadButton",
    component: ButtonWrapper,
};

export const ImageUploadButtonStory = {};
