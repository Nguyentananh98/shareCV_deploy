import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ReturnButton() {
  return <Button sx={{ boxShadow: 5 }} style={{color:"#FFC436",backgroundColor:"white",borderColor:"white",position: "relative",marginLeft:"10%"}} variant="text" startIcon={<ArrowBackIcon />}>Trang chủ</Button>
}