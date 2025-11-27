import React from 'react';
import { Modal, Button, Badge } from 'react-bootstrap';

const ImagePreviewModal = ({ show, project, onHide, onOpenCAD }) => {
  if (!project) return null;

  const handleOpenCAD = () => {
    if (!project.cadFile) return;
    onHide();
    onOpenCAD(project.cadFile, project.cadFileName);
  };

  const handleOpenLive = () => {
    if (!project.liveUrl) return;
    window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      className="image-preview-modal"
      backdropClassName="image-preview-backdrop"
    >
      <Modal.Header closeButton>
        <div className="image-preview-title">
          <h5>{project.title}</h5>
          <Badge bg="secondary">{project.category}</Badge>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="image-preview-wrapper">
          <img
            src={project.screenshot}
            alt={project.title}
            className="image-preview-img"
          />
        </div>
        <p className="image-preview-description">{project.description}</p>
        <div className="image-preview-tech">
          {project.techStack?.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        {project.cadFile && (
          <Button variant="primary" onClick={handleOpenCAD}>
            <span role="img" aria-hidden="true">🔍</span> Open 3D Viewer
          </Button>
        )}
        {project.liveUrl && !project.cadFile && (
          <Button variant="outline-primary" onClick={handleOpenLive}>
            <span role="img" aria-hidden="true">🌐</span> Visit Live Demo
          </Button>
        )}
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImagePreviewModal;

