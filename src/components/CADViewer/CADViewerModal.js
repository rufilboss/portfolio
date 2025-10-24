import React, { useEffect, useRef, useState } from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';
import * as THREE from 'three';
import './CADViewerModal.css';

const CADViewerModal = ({ show, onHide, filePath, fileName }) => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!show || !filePath) return;

    const initThreeJS = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      // Scene setup
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xf0f0f0);
      sceneRef.current = scene;

      // Camera setup
      const camera = new THREE.PerspectiveCamera(75, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
      camera.position.set(5, 5, 5);
      cameraRef.current = camera;

      // Renderer setup
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      rendererRef.current = renderer;

      // Lighting
      const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(10, 10, 5);
      directionalLight.castShadow = true;
      scene.add(directionalLight);

      // Load 3D model
      loadModel(filePath, scene);

      // Simple orbit controls (manual implementation)
      let mouseX = 0, mouseY = 0;
      let isMouseDown = false;

      const onMouseDown = (event) => {
        isMouseDown = true;
        mouseX = event.clientX;
        mouseY = event.clientY;
      };

      const onMouseMove = (event) => {
        if (!isMouseDown) return;
        
        const deltaX = event.clientX - mouseX;
        const deltaY = event.clientY - mouseY;
        
        camera.position.x += deltaX * 0.01;
        camera.position.y -= deltaY * 0.01;
        camera.lookAt(0, 0, 0);
        
        mouseX = event.clientX;
        mouseY = event.clientY;
      };

      const onMouseUp = () => {
        isMouseDown = false;
      };

      const onWheel = (event) => {
        const scale = event.deltaY > 0 ? 1.1 : 0.9;
        camera.position.multiplyScalar(scale);
      };

      canvas.addEventListener('mousedown', onMouseDown);
      canvas.addEventListener('mousemove', onMouseMove);
      canvas.addEventListener('mouseup', onMouseUp);
      canvas.addEventListener('wheel', onWheel);

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();

      // Cleanup function
      return () => {
        canvas.removeEventListener('mousedown', onMouseDown);
        canvas.removeEventListener('mousemove', onMouseMove);
        canvas.removeEventListener('mouseup', onMouseUp);
        canvas.removeEventListener('wheel', onWheel);
      };
    };

    const loadModel = (path, scene) => {
      setLoading(true);
      setError(null);

      // Determine file type and load accordingly
      const extension = path.split('.').pop().toLowerCase();
      
      if (extension === 'stl') {
        loadSTLModel(path, scene);
      } else if (extension === 'obj') {
        loadOBJModel(path, scene);
      } else {
        // Default: create a sample geometry for demonstration
        createSampleGeometry(scene);
      }
    };

    const loadSTLModel = (path, scene) => {
      // For STL files, we'll create a simple loader
      // In a real implementation, you'd use STLLoader from three/examples
      createSampleGeometry(scene);
    };

    const loadOBJModel = (path, scene) => {
      // For OBJ files, we'll create a simple loader
      // In a real implementation, you'd use OBJLoader from three/examples
      createSampleGeometry(scene);
    };

    const createSampleGeometry = (scene) => {
      // Create a sample 3D object for demonstration
      const geometry = new THREE.BoxGeometry(2, 2, 2);
      const material = new THREE.MeshLambertMaterial({ 
        color: 0x4a90e2,
        transparent: true,
        opacity: 0.8
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);

      // Add wireframe
      const wireframe = new THREE.WireframeGeometry(geometry);
      const line = new THREE.LineSegments(wireframe, new THREE.LineBasicMaterial({ color: 0x000000 }));
      scene.add(line);

      setLoading(false);
    };

    const cleanup = initThreeJS();
    return cleanup;
  }, [show, filePath]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName || 'cad-model';
    link.click();
  };

  return (
    <Modal 
      show={show} 
      onHide={onHide} 
      size="xl" 
      centered
      className="cad-viewer-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {fileName || '3D Model Viewer'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <div className="cad-viewer-container">
          {loading && (
            <div className="loading-overlay">
              <Spinner animation="border" variant="primary" />
              <p className="mt-2">Loading 3D model...</p>
            </div>
          )}
          {error && (
            <div className="error-overlay">
              <p className="text-danger">Error loading model: {error}</p>
            </div>
          )}
          <canvas 
            ref={canvasRef} 
            className="cad-viewer-canvas"
            style={{ width: '100%', height: '500px' }}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={onHide}>
          Close
        </Button>
        {filePath && (
          <Button variant="primary" onClick={handleDownload}>
            Download CAD File
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default CADViewerModal;
