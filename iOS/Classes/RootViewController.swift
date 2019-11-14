//  RootViewController.swift

import UIKit

class RootViewController: UIViewController {
  
  // Allow background observation of remote control events
  override var canBecomeFirstResponder: Bool {
    return true
  }
  
  override func viewDidAppear(_ animated: Bool) {
    super.viewDidAppear(animated)
    
    // Start listening for remote control events
    self.becomeFirstResponder()
    UIApplication.shared.beginReceivingRemoteControlEvents()
  }
  
  override func viewWillDisappear(_ animated: Bool) {
    super.viewWillDisappear(animated)
    
    // Stop listening for remote control events
    self.resignFirstResponder()
    UIApplication.shared.endReceivingRemoteControlEvents()
  }
}
